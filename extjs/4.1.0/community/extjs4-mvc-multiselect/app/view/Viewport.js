/**
 * The main application viewport, which displays the whole application
 * @extends Ext.Viewport
 */
Ext.define('ExtMVC.view.Viewport', {
    extend: 'Ext.Viewport',    
    
    layout: {
        type:'vbox',
        padding: 10,
        align:'stretch'
     },
    
    requires: [
        'ExtMVC.view.MultiSelectForm',
        'ExtMVC.view.ItemSelectorForm'
    ],
    
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            items: [
                {
                    xtype: 'multiselectform'
                },{
                    xtype: 'box',
                    html: '</br>'
                },{
                    xtype: 'itemselectorform'
                }
            ]
        });
                
        me.callParent(arguments);
    }
});
