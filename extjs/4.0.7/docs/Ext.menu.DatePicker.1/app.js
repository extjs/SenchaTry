Ext.onReady(function () {
    var dateMenu = Ext.create('Ext.menu.DatePicker', {
        handler: function (dp, date) {
            Ext.Msg.alert('Date Selected', 'You selected ' + Ext.Date.format(date, 'M j, Y'));
        }
    });

    Ext.create('Ext.menu.Menu', {
        width: 100,
        height: 90,
        floating: false, // usually you want this set to True (default)
        renderTo: Ext.getBody(), // usually rendered by it's containing component
        items: [{
            text: 'choose a date',
            menu: dateMenu
        }, {
            iconCls: 'add16',
            text: 'icon item'
        }, {
            text: 'regular item'
        }]
    });
});
