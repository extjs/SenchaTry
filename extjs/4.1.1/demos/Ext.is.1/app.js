/*global Ext:false */
Ext.onReady(function () {
    var platformStore = Ext.create('Ext.data.Store', {
        fields: ['name', 'value'],
        data: {
            items: [{
                name: 'Ext.is.Android:',
                value: Ext.is.Android
            }, {
                name: 'Ext.is.Blackberry:',
                value: Ext.is.Blackberry
            }, {
                name: 'Ext.is.Desktop:',
                value: Ext.is.Desktop
            }, {
                name: 'Ext.is.Linux:',
                value: Ext.is.Linux
            }, {
                name: 'Ext.is.Mac:',
                value: Ext.is.Mac
            }, {
                name: 'Ext.is.Phone:',
                value: Ext.is.Phone
            }, {
                name: 'Ext.is.Standalone:',
                value: Ext.is.Standalone
            }, {
                name: 'Ext.is.Tablet:',
                value: Ext.is.Tablet
            }, {
                name: 'Ext.is.Windows:',
                value: Ext.is.Windows
            }, {
                name: 'Ext.is.iOS:',
                value: Ext.is.iOS
            }, {
                name: 'Ext.is.iPad:',
                value: Ext.is.iPad
            }, {
                name: 'Ext.is.iPhone:',
                value: Ext.is.iPhone
            }, {
                name: 'Ext.is.iPod:',
                value: Ext.is.iPod
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
        title: 'Ext.is example',
        store: platformStore,
        columns: [{
            header: 'Name',
            dataIndex: 'name'
        }, {
            header: 'Value',
            dataIndex: 'value',
            flex: 1
        }],
        height: 200,
        width: 400,
        renderTo: Ext.getBody()
    });
});
