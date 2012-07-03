/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.Button', {
        id: 'btn',
        text: 'Click to launch dialog',
        handler: function () {
            Ext.Msg.show({
                title: 'Status title',
                msg: 'I\'m an Ext.Msg dialog with a custom icon.',
                icon: 'customIcon'
            });
        },
        renderTo: Ext.getBody()
    });
});
