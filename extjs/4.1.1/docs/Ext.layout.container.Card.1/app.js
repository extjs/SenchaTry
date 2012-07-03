/*global Ext:false */
Ext.onReady(function () {
    var p = Ext.create('Ext.panel.Panel', {
        layout: 'card',
        items: [{
            html: 'Card 1'
        }, {
            html: 'Card 2'
        }],
        renderTo: Ext.getBody()
    });

    p.getLayout().setActiveItem(1);
});
