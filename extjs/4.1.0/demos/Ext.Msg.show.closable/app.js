Ext.onReady(function () {
    var ch = Ext.create('Ext.form.Checkbox', {
        boxLabel: 'closable',
        renderTo: Ext.getBody()
    });
    Ext.create('Ext.Button', {
        text: 'Click to launch MessageBox',
        handler: function () {
            Ext.Msg.show({
                title: 'Ext.Msg.show() example',
                msg: '<code>closable: ' + ch.value + '</code>',
                closable: ch.value,
                buttons: Ext.Msg.OK
            });
        },
        renderTo: Ext.getBody()
    });
});
