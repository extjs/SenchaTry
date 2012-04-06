Ext.onReady(function () {
    Ext.create('Ext.Button', {
        text: 'Click to launch alert',
        handler: function (lbl) {
            var alrt = Ext.Msg.alert("Self closing alert", "This alert will close in 3 seconds");
            setTimeout(function (tgt) {
                if (!tgt.hidden) {
                    tgt.close();
                } else {
                    // alert is already closed.
                }
            }, 3000, alrt);
        },
        renderTo: Ext.getBody()
    }); // create()
}); // onReady()
