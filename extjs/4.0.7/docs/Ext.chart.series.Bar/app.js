Ext.onReady(function () {
    var store = Ext.create('Ext.data.JsonStore', {
        fields: ['name', 'data'],
        data: [{
            'name': 'metric one',
            'data': 10
        }, {
            'name': 'metric two',
            'data': 7
        }, {
            'name': 'metric three',
            'data': 5
        }, {
            'name': 'metric four',
            'data': 2
        }, {
            'name': 'metric five',
            'data': 27
        }]
    });

    Ext.create('Ext.chart.Chart', {
        renderTo: Ext.getBody(),
        width: 500,
        height: 300,
        animate: true,
        store: store,
        axes: [{
            type: 'Numeric',
            position: 'bottom',
            fields: ['data'],
            label: {
                renderer: Ext.util.Format.numberRenderer('0,0')
            },
            title: 'Sample Values',
            grid: true,
            minimum: 0
        }, {
            type: 'Category',
            position: 'left',
            fields: ['name'],
            title: 'Sample Metrics'
        }],
        series: [{
            type: 'bar',
            axis: 'bottom',
            highlight: true,
            tips: {
                trackMouse: true,
                width: 140,
                height: 28,
                renderer: function (storeItem, item) {
                    this.setTitle(storeItem.get('name') + ': ' + storeItem.get('data') + ' views');
                }
            },
            label: {
                display: 'insideEnd',
                field: 'data',
                renderer: Ext.util.Format.numberRenderer('0'),
                orientation: 'horizontal',
                color: '#333',
                'text-anchor': 'middle'
            },
            xField: 'name',
            yField: 'data'
        }]
    });
});