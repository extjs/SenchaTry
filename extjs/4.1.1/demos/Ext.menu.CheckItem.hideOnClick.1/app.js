/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.Button', {
        menu: [
            {
                text: 'Ext JS 4',
                xtype: 'menucheckitem',
                hideOnClick: true,
                handler: function (item, evt) {
                    Ext.Msg.alert(item.text + ' is checked?', item.checked.toString());
                }
            }, {
                text: 'Ext JS 3',
                xtype: 'menucheckitem',
                hideOnClick: true,
                handler: function (item, evt) {
                    Ext.Msg.alert(item.text + ' is checked?', item.checked.toString());
                }
            }, {
                xtype: 'menuseparator'
            }, {
                text: 'Sencha Touch 2',
                xtype: 'menucheckitem'
            }, {
                text: 'Sencha Touch 1',
                xtype: 'menucheckitem'
            }
        ], // menu
        renderTo: Ext.getBody(),
        text: 'Menu Button'
    }).showMenu();
}); // onReady()
