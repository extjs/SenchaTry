Ext.onReady(function () {
    Ext.create('Ext.Button', {
        menu: [
            {
                text: 'Ext JS 4',
                xtype: 'menucheckitem'
            }, {
                text: 'Ext JS 3',
                xtype: 'menucheckitem'
            }, {
                text: 'Sencha Touch 2',
                xtype: 'menucheckitem'
            }, {
                text: 'Sencha Touch 1',
                xtype: 'menucheckitem'
            }, {
                xtype: 'menuseparator'
            }, {
                text: 'Sencha.io'
            }
        ], // menu
        renderTo: Ext.getBody(),
        text: 'Menu Button'
    }).showMenu();
}); // onReady()
