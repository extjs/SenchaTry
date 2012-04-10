Ext.onReady(function () {
    Ext.create('Ext.data.Store', {
        storeId: 'sampleStore',
        fields: [{
            name: 'framework',
            type: 'string'
        }, {
            name: 'rocks',
            type: 'boolean'
        }],
        data: {
            'items': [{
                'framework': "Ext JS 4",
                'rocks': true
            }, {
                'framework': "Sencha Touch",
                'rocks': true
            }, {
                'framework': "Ext GWT",
                'rocks': true
            }, {
                'framework': "Other Guys",
                'rocks': false
            }]
        },
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
    });

    Ext.create('Ext.grid.Panel', {
        title: 'Boolean Column Demo',
        store: 'sampleStore',
        columns: [{
            text: 'Framework',
            dataIndex: 'framework',
            flex: 1
        }, {
            xtype: 'booleancolumn',
            text: 'Rocks',
            trueText: 'Yes',
            falseText: 'No',
            dataIndex: 'rocks'
        }],
        height: 200,
        width: 400,
        renderTo: Ext.getBody()
    });
});
