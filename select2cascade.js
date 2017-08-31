var Select2Cascade = (function() {
    var afterActions = [];
    this.then = function(callback) {
      afterActions.push(callback);
      return this;
    };

    function _set({parent, child, url, field, select2Options = {}, field_id = null, ordering = false}={}) {
      parent.select2(select2Options).on("change", function(e) {
        child.prop("disabled", true);
        child.trigger({
          type:"changeOptionsStart"
        });
        var _this = this;
        $.getJSON(url.replace(':parentId:', $(this).val()), function(items) {
          items = _.orderBy(items, field, 'asc');
          var itens_mod = [];
          var newOptions = '<option value>-- Selecione --</option>';
          var iten_default = newOptions;
          for (var id in items) {
            const item_field = items[id][field];
            let val_field = item_field;
            if (field_id)
              val_field = items[id][field_id];
            newOptions += '<option value="' + val_field + '">' + item_field + '</option>';
            itens_mod.push({id:val_field, text:item_field});
          }

          child.select2('destroy').html(newOptions).prop("disabled", false).select2(select2Options);
          child.trigger({
            type:"changeOptions",
            itens: itens_mod,
            iten_default: iten_default
          });

          afterActions.forEach(function(callback) {
            callback(parent, child, items);
          });
        });

      });
      var selectedChild = child.val();
      child.find('option').remove();
      child.trigger({
        type:"removeOptions",
      });

      if (parent.val()){
        parent.change();
        if(selectedChild){
          child.one('changeOptions', function () {
            child.val(selectedChild).change();
          });
        }
      }
    }
    return {
        set: _set
    };
}());
