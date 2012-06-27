Ext.define('Ext4Example.controller.Stocks', {
    extend: 'Ext.app.Controller',

    stores: ['Stocks'],

    models: ['Stock'],

    views: ['stock.StockGrid'],
    
    init: function() {
        this.control({
            'stockgrid actioncolumn': {
                click: this.onAction
            }
        });
    },
    
    onAction: function(view,cell,row,col,e){
        
        var m = e.getTarget().className.match(/\bicon-(\w+)\b/);
        
        var rec = this.getStocksStore().getAt(row);
        
        if(m){
            switch(m[1]){
                case 'buy':
                    alert("Buy " + rec.get('company'));
                    break;
                case 'alert':
                    alert("Hold " + rec.get('company'));
                    break;    
                case 'delete':
                    alert("Sell " + rec.get('company'));
                    break;
            }
        }
    }
});
