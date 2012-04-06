Ext.application({
    launch: function () {
        var form = Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'radiofield',
                name: 'color',
                value: 'red',
                label: 'Red',
                checked: true
            }, {
                xtype: 'radiofield',
                name: 'color',
                value: 'green',
                label: 'Green'
            }, {
                xtype: 'radiofield',
                name: 'color',
                value: 'blue',
                label: 'Blue'
            }]
        });
    } // launch
}); // application()