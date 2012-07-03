Ext.define('ExtMVC.model.State',{
    extend: 'Ext.data.Model',
    fields: [
       {name: 'state_id'},
       {name: 'state_name'}
    ],
    idProperty: 'state_id' 
});
