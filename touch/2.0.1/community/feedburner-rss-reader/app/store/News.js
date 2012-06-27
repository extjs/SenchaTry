/**
 * @author Andrea Cammarata (@AndreaCammarata)
 * @class RSS.store.News
 * @extends Ext.data.Store
 * Store which contains all the news related
 * to a single feed managed by the application.
 */
Ext.define('RSS.store.News', {
    extend: 'Ext.data.Store',
    requires: ['RSS.tux.data.proxy.FeedBurner'],
    config: {
        model: 'RSS.model.News',
        /* The store use a custom JsonP FeedBurner proxy
          * that allow it to get all the news using
          * the Google JSON Feed API */
        proxy: {
            type: 'feedburner',
            reader: {
                type: 'json',
                rootProperty: 'responseData.feed.entries'
            }
        }
    }    
});
