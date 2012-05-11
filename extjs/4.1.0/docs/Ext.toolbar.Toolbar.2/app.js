/*global Ext:false */
Ext.onReady(function() {
    Ext.create('Ext.toolbar.Toolbar', {
        renderTo: document.body,
        width: 400,
        items: [{
            text: 'Button'
        }, {
            xtype: 'splitbutton',
            text: 'Split Button'
        }, '->',
        {
            xtype: 'textfield',
            name: 'field1',
            emptyText: 'enter search term'
        }]
    });
});
