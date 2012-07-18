Ext.define('TR.store.FeaturedPhotos', {
    extend: 'Ext.data.Store',
    config: {
        model: 'TR.model.Photo',
        autoLoad: true,
        remoteFilter: true,
        proxy: {
            type: 'flickr',
            query: 'featured',
            reader: {
                type: 'json',
                rootProperty: 'query.results.photo'
            }
        }
    }
});