Ext.define('Ext4Example.controller.Stocks', {
    extend: 'Ext.app.Controller',

    stores: ['Stocks'],

    models: ['Stock'],

    views: ['stock.StockGrid','stock.StockForm','stock.StockPanel'],

    refs: [{
        ref: 'stockForm',
        selector: 'form'
    }],
    
    init: function() {

        this.control({
            'stockgrid': {
                selectionchange: this.gridSelectionChange,
                viewready: this.onViewReady
            }
        });
    },

    gridSelectionChange: function(model, records) {

        if (records[0]) {
             this.getStockForm().getForm().loadRecord(records[0]);
        }
    },
    
    onViewReady: function(grid) {
        grid.getSelectionModel().select(0);
    }    
});
