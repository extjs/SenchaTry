/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.Button', {
        text: 'Click to launch MessageBox',
        handler: function () {
            Ext.Msg.show({
                title: 'Ext.Msg.show() example',
                msg: 'Are you sure you want to delete The Internet?<br/><br/>This action cannot be undone.'
            });
        },
        renderTo: Ext.getBody()
    });
});
