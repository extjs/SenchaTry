Ext.define('Ext4Example.model.Stock', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'company'},
        {name: 'price',      type: 'float'},
        {name: 'change',     type: 'float'},
        {name: 'pctChange',  type: 'float'},
        {name: 'lastChange', type: 'date', dateFormat: 'm-d-Y'}
    ]
});
