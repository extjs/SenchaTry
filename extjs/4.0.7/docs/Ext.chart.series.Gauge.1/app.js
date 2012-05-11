/*global Ext:false */
Ext.onReady(function () {
    var store = Ext.create('Ext.data.JsonStore', {
        fields: ['data'],
        data: [{
            'value': 80
        }]
    });

    Ext.create('Ext.chart.Chart', {
        renderTo: Ext.getBody(),
        store: store,
        width: 400,
        height: 250,
        animate: true,
        insetPadding: 30,
        axes: [{
            type: 'gauge',
            position: 'gauge',
            minimum: 0,
            maximum: 100,
            steps: 10,
            margin: 10
        }],
        series: [{
            type: 'gauge',
            field: 'value',
            donut: 30,
            colorSet: ['#F49D10', '#ddd']
        }]
    });

    Ext.widget("button", {
        renderTo: Ext.getBody(),
        text: "Refresh",
        handler: function () {
            store.getAt(0).set('value', Math.round(Math.random() * 100));
        }
    });
});
