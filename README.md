# select2cascade

A helper for make a select cascade.

usage: Select2Cascade.set(options);

options:
- parent: The parent element for filter
- child: The child element for put the ajax response
- url: the url of ajax for filter. (ADd ':parentId:' in url to recognize the location for id to ajax)
- field: the field for get infos
- select2Options: options for select2
- field_id: the field for 'value' dom
- ordering: order by 'field' or not

Example:

{parent: $('#order'), child: $('#spect'), url: '/api/example/:parentId:/', field: 'name', select2Options: { width: 'resolve' }, ordering: true}

Dependences:
- Jquery
- Lodash

TODO:
Create a descent documentation and examples
Expand options and customizations
Remove dependences (Utilization of jquery and lodash)
