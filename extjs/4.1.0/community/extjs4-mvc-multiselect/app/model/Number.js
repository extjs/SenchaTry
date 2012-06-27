Ext.define('ExtMVC.model.Number',{
    extend: 'Ext.data.Model',
    fields: [
       {name: 'value'},
       {name: 'text'}
    ],
    idProperty: 'value'
});
