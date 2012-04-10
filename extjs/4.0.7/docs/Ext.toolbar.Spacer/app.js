Ext.onReady(function () {
    Ext.create('Ext.panel.Panel', {
        title: 'Toolbar Spacer Example',
        width: 300,
        height: 200,
        tbar: ['Item 1',
        {
            xtype: 'tbspacer'
        }, // or ' '
        'Item 2',
        // space width is also configurable via javascript
        {
            xtype: 'tbspacer',
            width: 50
        }, // add a 50px space
        'Item 3'],
        renderTo: Ext.getBody()
    });
});
