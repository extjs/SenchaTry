Ext.define('Ext4Example.view.stock.StockGrid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.stockgrid',
    
    title : 'Company Data',
    
    /**
     * Custom function used for column renderer
     * @param {Object} val
     */
    change: function(val) {
        if (val > 0) {
            return '<span style="color:green;">' + val + '</span>';
        } else if (val < 0) {
            return '<span style="color:red;">' + val + '</span>';
        }
        return val;
    },
    
    /**
     * Custom function used for column renderer
     * @param {Object} val
     */
    pctChange: function(val) {
        if (val > 0) {
            return '<span style="color:green;">' + val + '%</span>';
        } else if (val < 0) {
            return '<span style="color:red;">' + val + '%</span>';
        }
        return val;
    },

    // render rating as "A", "B" or "C" depending upon numeric value.
    rating: function(v) {
        if (v == 0) return "A";
        if (v == 1) return "B";
        if (v == 2) return "C";
    },
    
    viewConfig: {
        stripeRows: true
    },
    
    initComponent: function() {
        
        this.store = 'Stocks';
        
        this.columns = [{
            text     : 'Company',
            flex     : 1,
            sortable : false,
            dataIndex: 'company'
        },
        {
            text     : 'Price',
            width    : 75,
            sortable : true,
            renderer : 'usMoney',
            dataIndex: 'price'
        },
        {
            text     : 'Change',
            width    : 75,
            sortable : true,
            renderer : this.change,
            dataIndex: 'change'
        },
        {
            text     : '% Change',
            width    : 75,
            sortable : true,
            renderer : this.pctChange,
            dataIndex: 'pctChange'
        },
        {
            text     : 'Last Updated',
            width    : 85,
            sortable : true,
            renderer : Ext.util.Format.dateRenderer('m/d/Y'),
            dataIndex: 'lastChange'
        },
        {
            text: 'Rating',
            width: 30,
            sortable: true,
            renderer: this.rating,
            dataIndex: 'rating'
        }];
        
        this.callParent(arguments);
    }
});    
