/**
 * The main application viewport, which displays the whole application
 * @extends Ext.Viewport
 */
Ext.define('ExtMVC.view.Viewport', {
    extend: 'Ext.Viewport',    
    
    layout: 'fit',
    
    requires: [
        'ExtMVC.view.stocks.StockForm',
        'ExtMVC.view.stocks.StockGrid',
        'ExtMVC.view.chart.StockBar',
        'ExtMVC.view.chart.StockRadar'
    ],
    
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            items: [
                {
                    xtype: 'stockform'
                }
            ]
        });
                
        me.callParent(arguments);
    }
});
