Ext.define('ExtMVC.view.MultiSelectForm', {
    extend: 'Ext.form.Panel',
    alias : 'widget.multiselectform',

    requires: [
        'Ext.ux.form.MultiSelect',
        'ExtMVC.view.DockedToolbar',
        'ExtMVC.view.DockedButtons'
    ],

    title: 'MultiSelect Test',
    bodyPadding: 10,
    width: 700,

    items:[{
        anchor: '100%',
        xtype: 'multiselect',
        msgTarget: 'side',
        fieldLabel: 'Multiselect',
        name: 'multiselect',
        id: 'multiselect-field',
        allowBlank: false,
        store: Ext.create('ExtMVC.store.Numbers'),
        displayField: 'text',
        valueField: 'value',
        value: ['3', '4', '6'],
        ddReorder: true
    }],

    dockedItems: [{
        xtype: 'toptoolbar',
        dock: 'top'
    },{
        xtype: 'bottombuttons',
        dock: 'bottom'
    }]
})
