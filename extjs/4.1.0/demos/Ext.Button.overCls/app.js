Ext.onReady(function () {
    Ext.create('Ext.Button', {
        text: '<code>enableToggle: true</code>',
        enableToggle: true,
        overCls: 'customOverStyle',
        pressedCls: 'customPressedStyle',
        handler: function (obj) {
            obj.setText('<code>pressed: ' + obj.pressed + '</code>');
        }, // handler
        renderTo: Ext.getBody()
    }); // create()
}); // onReady()
