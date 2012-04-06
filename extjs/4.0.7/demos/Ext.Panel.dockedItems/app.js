Ext.onReady(function () {
    Ext.create('Ext.Panel', {
        height: 150,
        title: 'Ext.Panel title',
        renderTo: Ext.getBody(),
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{
                xtype: 'label',
                html: "Ext.Panel top bar"
            }] // items
        }, {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [{
                xtype: 'label',
                html: 'Ext.Panel bottom bar'
            }] // items
        }, {
            xtype: 'toolbar',
            dock: 'left',
            items: [{
                xtype: 'label',
                html: 'Ext.Panel left bar'
            }] // items
        }, {
            xtype: 'toolbar',
            dock: 'right',
            items: [{
                xtype: 'label',
                html: 'Ext.Panel right bar'
            }] // items
        }] // dockedItems
    }); // create()
}); // onReady()
