/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.Button', {
        text: 'Click to launch MessageBox',
        handler: function () {
            var msg = Ext.Msg.show({
                title: 'Ext.Msg.setIcon() example',
                msg: 'This example will change the displayed icon after 3 seconds.',
                icon: Ext.Msg.INFO
            }); // show()
            setTimeout(function (target, ico) {
                target.setIcon(ico);
            }, 3000, msg, Ext.Msg.ERROR);
        },
        renderTo: Ext.getBody()
    }); // create()
}); // onReady()
