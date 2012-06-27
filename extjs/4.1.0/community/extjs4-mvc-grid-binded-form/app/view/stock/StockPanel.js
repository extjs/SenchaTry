Ext.define('Ext4Example.view.stock.StockPanel' ,{
    extend: 'Ext.form.Panel',
    alias : 'widget.stockpanel',

    frame: true,
    title: 'Company Data',
    bodyPadding: 5,
    layout: 'column',    // Specifies that the items will now be arranged in columns

    fieldDefaults: {
        labelAlign: 'left',
        msgTarget: 'side'
    },

    items: [{
        xtype: 'stockgrid',
        columnWidth: .70
    },{
        xtype: 'stockform',
        columnWidth: .30
    }]

});    
