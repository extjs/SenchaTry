Ext.onReady(function() {
    var p = Ext.create('Ext.ProgressBar', {
        renderTo: Ext.getBody(),
        width: 300
    });

    // Wait for 5 seconds, then update the status el (progress bar will auto-reset)
    p.wait({
        interval: 500,
        //bar will move fast!
        duration: 50000,
        increment: 15,
        text: 'Updating...',
        scope: this,
        fn: function() {
            p.updateText('Done!');
        }
    });
});