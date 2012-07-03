Ext.define('ExtMVC.model.City',{
    extend: 'Ext.data.Model',
    fields: [
       {name: 'city_id'},
       {name: 'state_id'},
       {name: 'city_name'}
    ],

    idProperty: 'city_id'    
});
