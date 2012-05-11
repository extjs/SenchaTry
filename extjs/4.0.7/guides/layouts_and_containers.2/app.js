/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.panel.Panel', {
        renderTo: Ext.getBody(),
        width: 400,
        height: 200,
        title: 'Container Panel',
        layout: 'column',
        items: [{
            xtype: 'panel',
            title: 'Child Panel 1',
            height: 100,
            width: '50%'
        }, {
            xtype: 'panel',
            title: 'Child Panel 2',
            height: 100,
            width: '50%'
        }]
    });
});
