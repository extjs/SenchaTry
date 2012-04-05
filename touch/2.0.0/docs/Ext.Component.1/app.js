Ext.application({
    launch: function () {
        var panel = Ext.create('Ext.Panel', {
            layout: 'hbox',

            items: [{
                xtype: 'panel',
                flex: 1,
                html: 'Left Panel, 1/3rd of total size',
                style: 'background-color: #5E99CC;'
            }, {
                xtype: 'panel',
                flex: 2,
                html: 'Right Panel, 2/3rds of total size',
                style: 'background-color: #759E60;'
            }]
        });

        Ext.Viewport.add(panel);
    } // launch
}); // application()
