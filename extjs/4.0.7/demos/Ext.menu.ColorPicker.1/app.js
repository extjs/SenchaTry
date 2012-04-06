Ext.onReady(function () {
    var btn = Ext.create('Ext.Button', {
        menu: {
            xtype: 'colormenu',
            value: '000000',
            handler: function (obj, rgb) {
                Ext.Msg.alert('border-color: ' + rgb.toString());
            } // handler
        }, // menu
        renderTo: Ext.getBody(),
        text: 'Menu Button'
    }).showMenu();
}); // onReady()
