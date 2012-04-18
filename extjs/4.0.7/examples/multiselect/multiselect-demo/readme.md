# MultiSelect and ItemSelector #

## MultiSelect ##

MultiSelect is a form field type that allows selection of one or more items from a list. The list is populated using a data Store. Items can be reordered via drag and drop if `ddReorder:true` is set.

This example has `allowBlank:false` so a validation error will appear when the item's selections are cleared. Validations for `minSelections` and `maxSelections` can also be applied.

## ItemSelector ##

ItemSelector is a specialized MultiSelect field that renders as a pair of MultiSelect field, one with available options and the other with selected options. A set of buttons in between allows items to be moved between the fields and reordered within the selection. Items can also be moved via drag and drop.

All the same validations as MultiSelect are supported.
