/*global Ext:false */
Ext.onReady(function() {
    Ext.create('Ext.menu.Menu', {
        width: 100,
        height: 100,
        floating: false,
        // usually you want this set to True (default)
        renderTo: Ext.getBody(),
        // usually rendered by it's containing component
        items: [{
            text: 'icon item',
            iconCls: 'add16'
        }, {
            xtype: 'menuseparator'
        }, {
            text: 'separator above'
        }, {
            text: 'regular item'
        }]
    });
});
