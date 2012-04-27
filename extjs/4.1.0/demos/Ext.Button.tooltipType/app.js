Ext.onReady(function () {
    Ext.tip.QuickTipManager.init();
    
    Ext.create('Ext.Panel', {
        bodyPadding: 20,
        items: [
            Ext.create('Ext.Button', {
                text: 'Button w/ QuickTip (qtip) tooltip',
                tooltip: 'I\'m a QuickTip tooltip with a default <code>tooltipType</code> (qtip)'
            }), // create()
            
            Ext.create('Ext.Button', {
                text: 'Button w/ QuickTip tooltip',
                tooltip: 'I\'m a QuickTip tooltip with an explicit <code>tooltipType: qtip</code>',
                tooltipType: 'qtip'
            }), // create()
            
            Ext.create('Ext.Button', {
                text: 'Button w/ title tooltip',
                tooltip: 'I\'m a title tooltip with an explicit `tooltipType: title`',
                tooltipType: 'title'
            }) // create()
        ], // items
        renderTo: Ext.getBody()
    }); // create()
}); // onReady()
