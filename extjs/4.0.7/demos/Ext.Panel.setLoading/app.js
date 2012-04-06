Ext.onReady(function () {
    var pnl = Ext.create('Ext.Panel', {
        height: 150,
        renderTo: Ext.getBody(),
        tbar: [{
            text:"Panel setLoading()",
            handler: function () {
                pnl.setLoading();
                // Clear the loading mask after 3 seconds
                setTimeout(function (target) {
                    target.setLoading(false);
                }, 3000, pnl); // setTimeout()
            } // handler
        }] // tbar
    }); // create()
}); // onReady()
