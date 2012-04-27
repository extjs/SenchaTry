Ext.onReady(function () {
    Ext.create('Ext.Panel', {
        tbar: [{
            xtype: 'button',
            text: 'Ext.Msg.CANCEL',
            handler: function () {
                showMsg(Ext.Msg.CANCEL);
            }
        }, {
            xtype: 'button',
            text: 'Ext.Msg.NO',
            handler: function () {
                showMsg(Ext.Msg.NO);
            }
        }, {
            xtype: 'button',
            text: 'Ext.Msg.OK',
            handler: function () {
                showMsg(Ext.Msg.OK);
            }
        }, {
            xtype: 'button',
            text: 'Ext.Msg.OKCANCEL',
            handler: function () {
                showMsg(Ext.Msg.OKCANCEL);
            }
        }, {
            xtype: 'button',
            text: 'Ext.Msg.YES',
            handler: function () {
                showMsg(Ext.Msg.YES);
            }
        }, {
            xtype: 'button',
            text: 'Ext.Msg.YESNO',
            handler: function () {
                showMsg(Ext.Msg.YESNO);
            }
        }, {
            xtype: 'button',
            text: 'Ext.Msg.YESNOCANCEL',
            handler: function () {
                showMsg(Ext.Msg.YESNOCANCEL);
            }
        }, {
            xtype: 'button',
            text: 'Ext.Msg.NO|Ext.Msg.CANCEL|Ext.Msg.OK',
            handler: function () {
                showMsg(Ext.Msg.NO | Ext.Msg.CANCEL | Ext.Msg.OK);
            }
        }],
        renderTo: Ext.getBody()
    });
});

function showMsg(btns) {
    Ext.Msg.show({
        title: 'Ext.Msg.buttons example',
        msg: '<code>buttons: ' + btns + '</code>',
        buttons: btns
    });
}