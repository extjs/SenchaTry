Ext.define('TR.store.Search', {
    extend: 'Ext.data.Store',
    config: { 
        model: 'TR.model.Photo',
        remoteFilter: true,
        proxy: {
            type: 'flickr',
            query: 'search',
            reader: {
                type: 'json',
                rootProperty: 'query.results.photo'
            }
        }
   } 
});