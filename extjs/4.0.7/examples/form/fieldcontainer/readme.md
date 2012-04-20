# FieldContainer Example #

Several form fields can be placed onto the same row with a FieldContainer.
  
The FieldContainer's child items are arranged like in any other container, using the `layout` configuration property. In this example, each FieldContainer is set to use an HBox layout - [see the HBox docs for details](http://www.sencha.com/deploy/dev/docs/?class=Ext.layout.HBoxLayout) or the [HBox layout example](../layout/hbox/index.html).
  
FieldContainers can be configured with the combineErrors option, which combines errors from the sub fields and presents them at the container level.

In this example the Date Range, Phone and Full Name items have this option enabled, and the Time worked item does not. The [msgTarget](http://www.sencha.com/deploy/dev/docs/?class=Ext.form.Labelable&member=msgTarget) config option is fully supported, so errors can be rendered to any of the supported locations.
