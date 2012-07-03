Ext.define('ExtMVC.view.ItemSelectorForm', {
    extend: 'Ext.form.Panel',
    alias : 'widget.itemselectorform',

    requires: [
        'Ext.ux.form.ItemSelector',
        'ExtMVC.view.DockedToolbar',
        'ExtMVC.view.DockedButtons'
    ],

    title: 'ItemSelector Test',
    width: 700,
    bodyPadding: 10,
    height: 300,
    layout: 'fit',

    items:[{
        xtype: 'itemselector',
        name: 'itemselector',
        id: 'itemselector-field',
        anchor: '100%',
        fieldLabel: 'ItemSelector',
        store: Ext.create('ExtMVC.store.Numbers'),
        displayField: 'text',
        valueField: 'value',
        value: ['3', '4', '6'],
        allowBlank: false,
        msgTarget: 'side'
    }],

    dockedItems: [{
        xtype: 'toptoolbar',
        dock: 'top'
    },{
        xtype: 'bottombuttons',
        dock: 'bottom'
    }]
})
