Ext.application({
    launch: function() {
        Ext.create('Ext.DataView', {
            fullscreen: true,

            store: {
                autoLoad: true,
                fields: ['from_user', 'text', 'profile_image_url'],

                proxy: {
                    type: 'jsonp',
                    url: 'http://search.twitter.com/search.json?q=Sencha Touch',

                    reader: {
                        type: 'json',
                        root: 'results'
                    }
                }
            },

            itemTpl: '<img src="{profile_image_url}" /><h2>{from_user}</h2><p>{text}</p>'
        });
    }
});
