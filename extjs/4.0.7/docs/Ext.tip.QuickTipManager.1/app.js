Ext.onReady(function () {
    // Init the singleton.  Any tag-based quick tips will start working.
    Ext.tip.QuickTipManager.init();

    // Apply a set of config properties to the singleton
    Ext.apply(Ext.tip.QuickTipManager.getQuickTip(), {
        maxWidth: 200,
        minWidth: 100,
        showDelay: 50 // Show 50ms after entering target
    });

    // Create a small panel to add a quick tip to
    Ext.create('Ext.container.Container', {
        id: 'quickTipContainer',
        width: 200,
        height: 150,
        style: {
            backgroundColor: '#000000'
        },
        renderTo: Ext.getBody()
    });


    // Manually register a quick tip for a specific element
    Ext.tip.QuickTipManager.register({
        target: 'quickTipContainer',
        title: 'My Tooltip',
        text: 'This tooltip was added in code',
        width: 100,
        dismissDelay: 10000 // Hide after 10 seconds hover
    });
});
