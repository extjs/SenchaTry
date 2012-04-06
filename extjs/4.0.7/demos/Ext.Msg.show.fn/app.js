Ext.onReady(function () {
    Ext.create('Ext.Button', {
        text: 'Click to launch dialog',
        handler: function () {
            Ext.Msg.show({
                title: 'Status title',
                msg: 'Click a button below to dismiss the dialog',
                buttons: Ext.Msg.YESNOCANCEL,
                closable: false,
                fn: function (btn) {
                    Ext.Msg.alert('', 'You clicked the <code>' + btn + '</code> button.');
                    switch (btn) {
                        case "yes":
                            // something
                            break;
                        case "no":
                            // something
                            break;
                        case "cancel":
                            // something
                            break;
                        default:
                            // something else
                            break;
                    } // switch
                } // fn
            }); // show()
        },
        renderTo: Ext.getBody()
    }); // create()
}); // onReady()
