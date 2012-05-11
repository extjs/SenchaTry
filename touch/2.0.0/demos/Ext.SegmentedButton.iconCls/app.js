/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.Panel', {
            fullscreen: true,
            styleHtmlContent: true,
            items: [{
                xtype: 'segmentedbutton',
                items: [{
                    iconCls: 'home',
                    iconMask: true
                }, {
                    iconCls: 'settings',
                    iconMask: true,
                    text: 'Settings'
                }, {
                    iconCls: 'maps',
                    iconMask: true,
                    text: 'Maps'
                }] // items
            }] // items
        }); // create()
    } // launch
}); // application()
