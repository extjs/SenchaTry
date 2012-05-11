/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.Panel', {
        tbar: [{
            xtype: 'button',
            text: 'Ext.Msg.ERROR',
            handler: function () {
                showMessage('ERROR');
            }
        }, {
            xtype: 'button',
            text: 'Ext.Msg.INFO',
            handler: function () {
                showMessage('INFO');
            }
        }, {
            xtype: 'button',
            text: 'Ext.Msg.QUESTION',
            handler: function () {
                showMessage('QUESTION');
            }
        }, {
            xtype: 'button',
            text: 'Ext.Msg.WARNING',
            handler: function () {
                showMessage('WARNING');
            }
        }],
        renderTo: Ext.getBody()
    });
});

function showMessage(ico) {
    Ext.Msg.show({
        title: 'Ext.window.MessageBox icon example',
        msg: '<code>icon: Ext.Msg.' + ico + '</code>',
        icon: Ext.Msg[ico]
    });
}
