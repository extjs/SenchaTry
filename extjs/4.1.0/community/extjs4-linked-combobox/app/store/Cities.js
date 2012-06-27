Ext.define('ExtMVC.store.Cities',{
    extend: 'Ext.data.Store',
    
    model: 'ExtMVC.model.City',

    proxy: {
        type: 'ajax',

        url: 'php/listCities.php',

        reader: {
                type: 'json',
                root: 'data'
        }
    }
});
