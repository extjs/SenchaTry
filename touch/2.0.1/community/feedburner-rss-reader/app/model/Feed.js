/**
 * @author Andrea Cammarata (@AndreaCammarata)
 * @class RSS.model.Feed
 * @extends Ext.data.Model
 * Model which contains all the information related
 * to a single Feed managed by the application.
 */
Ext.define('RSS.model.Feed', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'name',           type: 'string' },
            { name: 'url',            type: 'string' },
            { name: 'nameRewrite',    type: 'string' ,    convert: function(v, record){
        
                /* This field will contains the news title value
                 * converted in a prettify format. */
                return url.prettify(record.get('name'));
        
            }}
        ],
        //The Url should be a valid FeedBurner one
        validations: [
            { type: 'format', field: 'url', matcher: /^http:\/\/feeds.feedburner.com\/.?/ }
        ],
        /* This model use a localstorage proxy to be able to save
         * all the user feeds locally without needing to be specified 
         * by the user every time he open the application. */
        proxy: {
            type: 'localstorage',
            id: 'feeds'
        }
    }
});
