Ext.application({
    launch: function () {
        Ext.create('Ext.TabPanel', {
            fullscreen: true,
            tabBarPosition: 'bottom',
            defaults: {
                styleHtmlContent: true,
            }, // defaults
            items: [{
                badgeText: '0',
                html: 'Home container',
                iconCls: 'home',
                style: 'background-color:red;',
                title: 'Home'
            }, {
                badgeText: 2,
                html: 'Profile container',
                iconCls: 'user',
                style: 'background-color:green;',
                title: 'Profile'
            }, {
                badgeText: 13,
                html: 'Settings container',
                iconCls: 'settings',
                style: 'background-color: blue;',
                title: 'Settings'
            }] // items
        }); // create()
    } // launch
}); // application()
