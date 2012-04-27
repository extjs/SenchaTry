Ext.onReady(function () {
    Ext.create('Ext.Button', {
        menu: [
            {
                text: 'Ext JS 4'
            }, {
                text: 'Ext JS 3'
            }, {
                xtype: 'menuseparator' // default separator
            }, {
                text: 'Sencha Touch 2'
            }, {
                text: 'Sencha Touch 1'
            }, {
                xtype: 'menuseparator', separatorCls: 'customMenuSeparator'
            }, {
                text: '^^ custom menu separator class ^^'
            }
        ],
        renderTo: Ext.getBody(),
        text: 'Menu Button'
    }).showMenu();
}); // onReady()
