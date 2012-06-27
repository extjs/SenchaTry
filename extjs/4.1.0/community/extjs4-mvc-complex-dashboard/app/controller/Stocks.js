Ext.define('ExtMVC.controller.Stocks', {
    extend: 'Ext.app.Controller',

    models: ['Stock','RadarDataSet'],

    stores: ['Stocks', 'RadarDataSets'],

    views: [
        'chart.StockRadar', 
        'chart.StockBar', 
        'stocks.StockGrid',
        'stocks.StockForm'
    ],

    refs: [{
        ref: 'stockForm',
        selector: 'form'
    },{
        ref: 'stockGrid',
        selector: 'grid'
    }],

    init: function() {

        this.loadStore();
        
        this.control({
            'stockgrid': {
                selectionchange: this.selectionchange
            }/*,
            'textfield': {
                change: this.changeField
            }*/,
            'numberfield': {
                change: this.changeField
            },
            'stockbar': {
                afterrender: function (chart,o) {
                
                    var series = chart.series.getAt(0);
                    series.listeners = {
                        itemmouseup: function(item) {                            
                           
                            var series = Ext.ComponentQuery.query('stockbar')[0].series.get(0);
                            var index = Ext.Array.indexOf(series.items, item);
                            var selectionModel = Ext.ComponentQuery.query('grid')[0].getSelectionModel();
                     
                            var selectedStoreItem = item.storeItem;
                            selectionModel.select(index);
                        }
                    }
                },
                beforerefresh: this.beforerefresh
            }
        });    
    },

    loadStore: function(){
      
        var store = this.getStocksStore();
        
        // sample static data for the store
        var myData = [
            ['3m Co'],
            ['Alcoa Inc'],
            ['Altria Group Inc'],
            ['American Express Company'],
            ['American International Group, Inc.'],
            ['AT&T Inc'],
            ['Boeing Co.'],
            ['Caterpillar Inc.'],
            ['Citigroup, Inc.'],
            ['E.I. du Pont de Nemours and Company'],
            ['Exxon Mobil Corp'],
            ['General Electric Company'],
            ['General Motors Corporation'],
            ['Hewlett-Packard Co'],
            ['Honeywell Intl Inc'],
            ['Intel Corporation'],
            ['International Business Machines'],
            ['Johnson & Johnson'],
            ['JP Morgan & Chase & Co'],
            ['McDonald\'s Corporation'],
            ['Merck & Co., Inc.'],
            ['Microsoft Corporation'],
            ['Pfizer Inc'],
            ['The Coca-Cola Company'],
            ['The Home Depot, Inc.'],
            ['The Procter & Gamble Company'],
            ['United Technologies Corporation'],
            ['Verizon Communications'],
            ['Wal-Mart Stores, Inc.']
        ];

        for (var i = 0, l = myData.length, rand = Math.random; i < l; i++) {
            var data = myData[i];
            data[1] = ((rand() * 10000) >> 0) / 100;
            data[2] = ((rand() * 10000) >> 0) / 100;
            data[3] = ((rand() * 10000) >> 0) / 100;
            data[4] = ((rand() * 10000) >> 0) / 100;
            data[5] = ((rand() * 10000) >> 0) / 100;
        }

        store.loadData(myData);
    },

    selectionchange: function(model, records){
        
        var json, name, i, l, items, series, fields;

        var form = this.getStockForm().getForm();

        if (records[0]) {
            rec = records[0];
            
            if (!form) {
                form = this.getStockForm().getForm();
                fields = form.getFields();
                fields.each(function(field){
                    if (field.name != 'company') {
                        field.setDisabled(false);
                    }
                });
            } else {
                fields = form.getFields();
            }
            
            // prevent change events from firing
            fields.each(function(field){
                field.suspendEvents();
                console.log('suspended');
            });
            form.loadRecord(rec);
            this.updateRecord(rec);

            fields.each(function(field){
                field.resumeEvents();
            });

            fields.each(function(field){
                if (field.name != 'company') {
                    field.setDisabled(false);
                }
            });
        }    
    },

    updateRecord: function(rec) {
        var name, series, i, l, items, json = [{
            'Name': 'Price',
            'Data': rec.get('price')
        }, {
            'Name': 'Revenue %',
            'Data': rec.get('revenue %')
        }, {
            'Name': 'Growth %',
            'Data': rec.get('growth %')
        }, {
            'Name': 'Product %',
            'Data': rec.get('product %')
        }, {
            'Name': 'Market %',
            'Data': rec.get('market %')
        }];

        var store = this.getRadarDataSetsStore();
        store.loadData(json);
        this.selectItem(rec);
    },

    selectItem: function(storeItem) {

        var name = storeItem.data.company;//storeItem.get('company'),
        var series = Ext.ComponentQuery.query('stockbar')[0].series.get(0);
        var i, items, l;
        
        series.highlight = true;
        series.unHighlightItem();
        series.cleanHighlights();
        for (i = 0, items = series.items, l = items.length; i < l; i++) {
            if (name == items[i].storeItem.get('company')) {
                selectedStoreItem = items[i].storeItem;
                series.highlightItem(items[i]);
                break;
            }
        }
        series.highlight = false;
    },

    changeField: function(field, newValue, oldValue) {

        console.log('changeField');

        var form = this.getStockForm().getForm();
        var rec = this.getStockGrid().getSelectionModel().getSelection()[0];

        if (rec && form) {
            if (newValue > field.maxValue) {
                field.setValue(field.maxValue);
            } else {
                form.updateRecord(rec);
                this.updateRecord(rec);
            }
        }
    },

    beforerefresh: function() {
        var timer = false;

        return function() {
            clearTimeout(timer);

            var series = Ext.ComponentQuery.query('stockbar')[0].series.get(0);
            var index = Ext.Array.indexOf(series.items, item);
            var selectionModel = Ext.ComponentQuery.query('grid')[0].getSelectionModel();
            var selectedStoreItem = item.storeItem; 

            if (selectedStoreItem) {
                timer = setTimeout(function() {
                    this.selectItem(selectedStoreItem);
                }, 900);
            }
        };
    }
});
