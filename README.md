# select2cascade

A helper for make a select cascade.

usage: Select2Cascade.set(options);

options:
- parent: The parent element for filter
- child: The child element for put the ajax response
- url: the url of ajax for filter.
- field: the field for get infos
- select2Options: options for select2 - Default: {}
- field_id: the field for 'value' dom - Default: none (if none, the field option is the same for field_id)
- ordering: order by 'field' or not - Default: false
- get_param: name of the param for send in get request - Default: 'search'
- reverse: ordering by desc (true) or asc (false) - Default: false

Example:

{parent: $('#order'), child: $('#spect'), url: '/api/example/', field: 'name', select2Options: { width: 'resolve' }, ordering: true}

Dependences:
- Jquery
- Lodash

TODO:
- Create a descent documentation and examples
- Expand options and customizations
- Remove dependences (Utilization of jquery and lodash)
- Webpack
