Ext.application({
    launch: function () {
        Ext.create('Ext.TabPanel', {
            fullscreen: true,
            tabBar: {
                layout: {
                    pack: 'start'
                } // layout
            }, // tabBar
            tabBarPosition: 'bottom',
            defaults: {
                styleHtmlContent: true,
                listeners: {
                    show: setTabBarPack
                } // listeners
            }, // defaults
            items: [{
                title: 'start',
                iconCls: 'arrow_left',
                html: 'tabBar: { layout: { pack: "start" } }'
            }, {
                title: 'center',
                iconCls: 'arrow_down',
                html: 'tabBar: { layout: { pack: "center" } }'
            }, {
                title: 'end',
                iconCls: 'arrow_right',
                html: 'tabBar: { layout: { pack: "end" } }'
            }] // items
        }); // create()
        
        function setTabBarPack(obj) {
            var value = obj.config.title;
            Ext.ComponentQuery.query('tabpanel')[0].getTabBar().getLayout().setPack(value);
        } // setTabBarPack()
    } // launch
}); // application()
