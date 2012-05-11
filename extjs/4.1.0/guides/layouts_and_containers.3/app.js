/*global Ext:false */
Ext.onReady(function() {
    var containerPanel = Ext.create('Ext.panel.Panel', {
        renderTo: Ext.getBody(),
        width: 400,
        height: 200,
        title: 'Container Panel',
        layout: 'column',
        suspendLayout: true // Suspend automatic layouts while we do several different things that could trigger a layout on their own
    });
    // Add a couple of child items.  We could add these both at the same time by passing an array to add(),
    // but lets pretend we needed to add them separately for some reason.
    containerPanel.add({
        xtype: 'panel',
        title: 'Child Panel 1',
        height: 100,
        columnWidth: 0.5
    });
    containerPanel.add({
        xtype: 'panel',
        title: 'Child Panel 2',
        height: 100,
        columnWidth: 0.5
    });
    // Turn the suspendLayout flag off.
    containerPanel.suspendLayout = false;
    // Trigger a layout.
    containerPanel.doLayout();
});
