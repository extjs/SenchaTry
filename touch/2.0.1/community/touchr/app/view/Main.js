Ext.define('TR.view.Main', {
    extend: 'Ext.tab.Panel',
    config: {
        tabBarPosition: 'bottom',
        items: [{
            xtype: 'featuredlist'
        },{
            xtype: 'searchlist'
        },{
            xtype: 'userlist'
        }]
    }
});