Ext.define('ExtMVC.store.States',{
    extend: 'Ext.data.Store',

    storeId: 'statesStore',
    
    model: 'ExtMVC.model.State',

    autoLoad:true,

    proxy: {
        type: 'ajax',

        url: 'php/listStates.php',

        reader: {
                type: 'json',
                root: 'data'
        }
    }
});
