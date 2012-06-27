Ext.define('ExtMVC.view.portal.WestMenu', {
    extend: 'Ext.panel.Panel',    
    
    alias: 'widget.westmenu',

    requires: [
        'ExtMVC.view.portal.NavigationMenu',
        'ExtMVC.view.portal.SettingsMenu'
    ],
    
    initComponent: function() {
        
        Ext.apply(this, {

            title: 'Options',
            animCollapse: true,
            width: 200,
            minWidth: 150,
            maxWidth: 400,
            split: true,
            collapsible: true,
            layout:{
                type: 'accordion',
                animate: true
            },
            items: [{
                xtype: 'navigation'
            },{
                xtype: 'settings'
            }]
        });
                
        this.callParent(arguments);
    }
});
