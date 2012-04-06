Ext.onReady(function () {
    var btn = Ext.create('Ext.Button', {
        menu: [{
            text: 'background-color',
            menu: {
                xtype: 'colormenu',
                value: '000000',
                handler: function (obj, rgb) {
                    Ext.Msg.alert('background-color: ' + rgb.toString());
                } // handler
            } // menu
        }, {
            text: 'border-color',
            menu: {
                xtype: 'colormenu',
                value: '000000',
                handler: function (obj, rgb) {
                    Ext.Msg.alert('border-color: ' + rgb.toString());
                } // handler
            } // menu
        }], // menu
        renderTo: Ext.getBody(),
        text: 'Menu Button'
    }).showMenu();
}); // onReady()
