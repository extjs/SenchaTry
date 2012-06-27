Ext.define('ExtMVC.model.Book',{
    extend: 'Ext.data.Model',
    fields: [
        // set up the fields mapping into the xml doc
        // The first needs mapping, the others are very basic
        {name: 'Author', mapping: 'ItemAttributes > Author'},
        'Title', 
        'Manufacturer', 
        'ProductGroup'
    ]
});
