Ext.onReady(function() {
    Ext.tip.QuickTipManager.init(); // enable tooltips
    Ext.create('Ext.form.HtmlEditor', {
        width: 580,
        height: 250,
        renderTo: Ext.getBody()
    });
});
