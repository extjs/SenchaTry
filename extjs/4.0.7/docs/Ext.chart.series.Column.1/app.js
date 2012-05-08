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
            position: 'left',
            fields: ['data'],
            label: {
                renderer: Ext.util.Format.numberRenderer('0,0')
            },
            title: 'Sample Values',
            grid: true,
            minimum: 0
        }, {
            type: 'Category',
            position: 'bottom',
            fields: ['name'],
            title: 'Sample Metrics'
        }],
        series: [{
            type: 'column',
            axis: 'left',
            highlight: true,
            tips: {
                trackMouse: true,
                width: 140,
                height: 28,
                renderer: function (storeItem, item) {
                    this.setTitle(storeItem.get('name') + ': ' + storeItem.get('data') + ' $');
                }
            },
            label: {
                display: 'insideEnd',
                'text-anchor': 'middle',
                field: 'data',
                renderer: Ext.util.Format.numberRenderer('0'),
                orientation: 'vertical',
                color: '#333'
            },
            xField: 'name',
            yField: 'data'
        }]
    });
});
