/*global Ext:false */
Ext.onReady(function() {
    var colorPicker = Ext.create('Ext.menu.ColorPicker', {
        value: '000000'
    });

    Ext.create('Ext.menu.Menu', {
        width: 100,
        height: 90,
        floating: false,
        // usually you want this set to True (default)
        renderTo: Ext.getBody(),
        // usually rendered by it's containing component
        items: [{
            text: 'choose a color',
            menu: colorPicker
        }, {
            iconCls: 'add16',
            text: 'icon item'
        }, {
            text: 'regular item'
        }]
    });
});
