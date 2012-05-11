/*global Ext:false */
Ext.onReady(function() {
    Ext.create('Ext.Button', {
        text: 'Menu button',
        renderTo: Ext.getBody(),
        arrowAlign: 'bottom',
        menu: [{
            text: 'Item 1'
        }, {
            text: 'Item 2'
        }, {
            text: 'Item 3'
        }, {
            text: 'Item 4'
        }]
    });
});
