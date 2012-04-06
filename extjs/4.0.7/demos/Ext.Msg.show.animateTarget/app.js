Ext.onReady(function () {
    Ext.create('Ext.Button', {
        id: 'btn',
        text: 'Click to launch dialog',
        handler: function () {
            Ext.Msg.show({
                animateTarget: 'btn',
                title: 'Everyday I\'m animatin\'',
                msg: 'I should have animated relative to the Ext.Button instance.<br><br>Didn\'t see? Close the dialog and try again.'
            });
        },
        renderTo: Ext.getBody()
    })
});
