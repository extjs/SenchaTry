/*global Ext:false */
Ext.onReady(function() {
    Ext.create('Ext.menu.Menu', {
        width: 100,
        margin: '0 0 10 0',
        floating: false,
        // usually you want this set to True (default)
        renderTo: Ext.getBody(),
        // usually rendered by it's containing component
        items: [{
            text: 'regular item 1'
        }, {
            text: 'regular item 2'
        }, {
            text: 'regular item 3'
        }]
    });

    Ext.create('Ext.menu.Menu', {
        width: 100,
        plain: true,
        floating: false,
        // usually you want this set to True (default)
        renderTo: Ext.getBody(),
        // usually rendered by it's containing component
        items: [{
            text: 'plain item 1'
        }, {
            text: 'plain item 2'
        }, {
            text: 'plain item 3'
        }]
    });
});
