Ext.application({
    launch: function() {
        Ext.application({
            name: 'Sencha',

            launch: function() {
                Ext.create("Ext.tab.Panel", {
                    fullscreen: true,
                    items: [{
                        title: 'Home',
                        iconCls: 'home',
                        html: 'Welcome'
                    }]
                });
            }
        });
    }
});
