# Combo Boxes #

## Data Sources ##

The combo box can use any type of Ext.data.Store as its data source. This means your data can be XML, JSON, arrays or any other supported format. It can be loaded using Ajax, via script tags or locally. This combo uses local data from a JS array.


## Custom Item Templates ##

The combo below uses the same data, but also illustrates how to use an optional custom template to create custom UI renditions for list items by overriding the getInnerTpl method. In this case each item shows the state's abbreviation, and has a QuickTip which displays the state's nickname when hovered over.


## Multiple Selection ##

The combo below uses the same data once again, but allows selecting multiple values.


## Transformation ##

ComboBoxes can also be created from existing HTML `select` elements on the page by specifying the `transform` config. This allows creation of rich ComboBox fields with autocompletion and list filtering, in an unobtrusive way.
