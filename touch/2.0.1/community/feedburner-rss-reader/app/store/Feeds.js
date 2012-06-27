/**
 * @author Andrea Cammarata (@AndreaCammarata)
 * @class RSS.store.Feeds
 * @extends Ext.data.Store
 * Store which contains all the feeds specified
 * by the user and managed by the application.
 */
Ext.define('RSS.store.Feeds', {
    extend: 'Ext.data.Store',
    config: {
        model: 'RSS.model.Feed',
        autoLoad: true,
        autoSync: true,
        reader: {
            type: 'json'
        }
    }    
});
