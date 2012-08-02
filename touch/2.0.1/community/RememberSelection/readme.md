# RememberSelection 1.0 Beta #

This extension saves and restores list selections using a localStorage proxy. When a user selects a list item like a country, language, etc. your app will remember the choice and restore their selections the next time this list is shown. Any handlers fire as though the user actually reselected each item.

Plugin: Ext.plugin.RememberSelection
Version: 1.0 Beta
Tested: Sencha Touch 2.0.1.1
Author: Bunchofstring (Dave Mitchell)

## Requirements:

1. List must be bound to a store
2. The bound store must use a LocalStorage proxy
3. The store's model must include a "selected" field. I.e. {name:'selected',type:'boolean',defaultValue:false},

## Related Notes:

1. Generally, avoid interfaces where users must select from a list of more than 7 items
2. The list must be painted before any developer-defined selection handlers will be triggered
