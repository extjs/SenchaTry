Ext.application({
    launch: function () {
        Ext.create('Ext.TabPanel', {
            fullscreen: true,
            tabBarPosition: 'bottom',
            defaults: {
                styleHtmlContent: true
            }, // defaults
            items: [{
                badgeText: '0',
                html: 'Home container',
                iconCls: 'home',
                listeners: {
                    show: function (aa) {
                        console.log(this);
                        alert('Home show');
                    }, // show
                    hide: function () {
                        alert('Home hide');
                    } // hide
                }, // listeners
                style: 'background-color:red;',
                title: 'Home'
            }, {
                badgeText: 2,
                html: 'Profile container',
                iconCls: 'user',
                listeners: {
                    show: function () {
                        alert('Profile show');
                    }, // show
                    hide: function () {
                        alert('Profile hide');
                    } // hide
                }, // listeners
                style: 'background-color:green;',
                title: 'Profile'
            }, {
                badgeText: 13,
                html: 'Settings container',
                iconCls: 'settings',
                listeners: {
                    show: function () {
                        alert('Settings show');
                    }, // show
                    hide: function () {
                        alert('Settings hide');
                    } // hide
                }, // listeners
                style: 'background-color: blue;',
                title: 'Settings'
            }] // items
        }); // create()
    } // launch
}); // application()
