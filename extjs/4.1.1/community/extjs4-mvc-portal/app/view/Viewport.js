Ext.define('ExtMVC.view.Viewport', {

    extend: 'Ext.container.Viewport',
   
    uses: [
        'ExtMVC.view.app.PortalPanel', 
        'ExtMVC.view.app.PortalColumn',
        'ExtMVC.view.portal.PortletPanel',
        'ExtMVC.view.portal.WestMenu',
        'ExtMVC.view.portlet.GridPortlet', 
        'ExtMVC.view.portlet.ChartPortlet',
        'ExtMVC.util.Constants'
    ],

    initComponent: function(){

        Ext.apply(this, {
            id: 'app-viewport',
            layout: {
                type: 'border',
                padding: '0 5 5 5'
            },
            items: [{
                id: 'app-header',
                xtype: 'box',
                region: 'north',
                height: 40,
                html: 'Ext Portal'
            },{
                xtype: 'container',
                region: 'center',
                layout: 'border',
                items: [{
                    id: 'app-options',
                    xtype: 'westmenu',
                    region: 'west'
                },{
                    id: 'app-portal',
                    xtype: 'portletpanel',
                    region: 'center',
                }]
            }]
        });
        this.callParent(arguments);
    }
});
