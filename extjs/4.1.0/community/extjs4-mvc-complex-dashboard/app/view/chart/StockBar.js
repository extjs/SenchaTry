Ext.define('ExtMVC.view.chart.StockBar', {
    extend: 'Ext.chart.Chart',
    alias : 'widget.stockbar',

    flex: 1,
    shadow: true,
    animate: true,
    store: 'Stocks',
    axes: [{
        type: 'Numeric',
        position: 'left',
        fields: ['price'],
        minimum: 0,
        hidden: true
    }, {
        type: 'Category',
        position: 'bottom',
        fields: ['company'],
        label: {
            renderer: function(v) {
                return Ext.String.ellipsis(v, 15, false);
            },
            font: '9px Arial',
            rotate: {
                degrees: 270
            }
        }
    }],
    series: [{
        type: 'column',
        axis: 'left',
        highlight: true,
        style: {
            fill: '#456d9f'
        },
        highlightCfg: {
            fill: '#a2b5ca'
        },
        label: {
            contrast: true,
            display: 'insideEnd',
            field: 'price',
            color: '#000',
            orientation: 'vertical',
            'text-anchor': 'middle'
        },
        xField: 'name',
        yField: ['price']
    }]        
});    
