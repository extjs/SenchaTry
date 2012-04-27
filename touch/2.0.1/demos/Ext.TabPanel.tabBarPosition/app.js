Ext.application({
    launch: function () {
        Ext.create('Ext.TabPanel', {
            fullscreen: true,
            tabBarPosition: 'bottom',
            styleHtmlContent: true,
            items: [{
                title: 'Home',
                iconCls: 'home',
                html: 'Home container'
            }, {
                title: 'Profile',
                iconCls: 'user',
                html: 'Profile container'
            }, {
                title: 'Settings',
                iconCls: 'settings',
                html: 'Settings container'
            }] // items
        }); // create()
    } // launch
}); // application()
