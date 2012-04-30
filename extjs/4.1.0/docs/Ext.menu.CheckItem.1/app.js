Ext.onReady(function() {
    Ext.create('Ext.menu.Menu', {
        width: 100,
        height: 110,
        floating: false,
        // usually you want this set to True (default)
        renderTo: Ext.getBody(),
        // usually rendered by it's containing component
        items: [{
            xtype: 'menucheckitem',
            text: 'select all'
        }, {
            xtype: 'menucheckitem',
            text: 'select specific'
        }, {
            iconCls: 'add16',
            text: 'icon item'
        }, {
            text: 'regular item'
        }]
    });
});
