/*global Ext:false */
Ext.onReady(function() {
    var childPanel1 = Ext.create('Ext.panel.Panel', {
        title: 'Child Panel 1',
        html: 'A Panel'
    });

    var childPanel2 = Ext.create('Ext.panel.Panel', {
        title: 'Child Panel 2',
        html: 'Another Panel'
    });

    Ext.create('Ext.container.Viewport', {
        items: [childPanel1, childPanel2]
    });
});
