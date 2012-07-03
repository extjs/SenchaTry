/*global Ext:false */
Ext.onReady(function () {
    Ext.tip.QuickTipManager.init(); // enable tooltips
    new Ext.panel.Panel({
        title: 'HTML Editor',
        renderTo: Ext.getBody(),
        width: 550,
        height: 250,
        frame: true,
        layout: 'fit',
        items: {
            xtype: 'htmleditor',
            enableColors: false,
            enableAlignments: false
        }
    });
});
