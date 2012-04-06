Ext.onReady(function () {
    Ext.tip.QuickTipManager.init();
    
    Ext.create('Ext.Button', {
        renderTo: Ext.getBody(),
        text: 'Button w/ QuickTip (qtip) tooltip',
        tooltip: 'I\'m a custom tooltip'
    }); // create()
}); // onReady()
