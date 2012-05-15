/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.Button', {
        menu: [
            {
                text: 'Ext JS 4'
            }, {
                text: 'Ext JS 3'
            }, 
            '-',
            {
                text: 'Sencha Touch 2'
            }, {
                text: 'Sencha Touch 1'
            }, {
                xtype: 'menuseparator'
            }, {
                text: 'Sencha.io'
            }
        ],
        renderTo: Ext.getBody(),
        text: 'Menu Button'
    }).showMenu();
}); // onReady()
