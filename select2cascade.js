var Select2Cascade = (function() {
    var afterActions = [];
    this.then = function(callback) {
      afterActions.push(callback);
      return this;
    };

    function _set({parent, child, url, field, select2Options = {}, field_id = null, ordering = false}={}) {
      parent.select2(select2Options).on("change", function(e) {
        child.prop("disabled", true);
        var _this = this;
        $.getJSON(url.replace(':parentId:', $(this).val()), function(items) {
          items = _.orderBy(items, field, 'asc');
          var newOptions = '<option value>-- Selecione --</option>';
          for (var id in items) {
            const item_field = items[id][field];
            let val_field = item_field;
            if (field_id)
              val_field = field_id;
            newOptions += '<option value="' + val_field + '">' + item_field + '</option>';
          }

          child.select2('destroy').html(newOptions).prop("disabled", false).select2(select2Options);

          afterActions.forEach(function(callback) {
            callback(parent, child, items);
          });
        });
      });
    }
    return {
        set: _set
    };
}());
