/**
 * The main application viewport, which displays the whole application
 * @extends Ext.Viewport
 */
Ext.define('Ext4Example.view.Viewport', {
    extend: 'Ext.Viewport',    
    layout: 'fit',
    
    requires: [
        'Ext4Example.view.stock.StockGrid',
        'Ext4Example.view.stock.StockForm'
    ], 
    
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            items: [
                {
                    xtype: 'stockpanel'
                }
            ]
        });
                
        me.callParent(arguments);
    }
});
