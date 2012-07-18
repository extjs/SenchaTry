Ext.Loader.setPath({
    'Ext.data.proxy.Flickr': 'lib/FlickrProxy.js'
});

Ext.ClassManager.setAlias('Ext.data.proxy.Flickr', 'proxy.flickr');

Ext.application({
    name: 'TR',
    requires: [
        'Ext.data.proxy.Flickr',
        'Ext.field.Search'
    ],
    stores: [
        'FeaturedPhotos',
        'Search',
        'UserPhotos'
    ],
    models: [
        'Photo'
    ],
    controllers: [
        'Search',
        'UserPhotos'
    ],
    views: [
        'featured.List',
        'Main',
        'search.List',
        'user.List'
    ],

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('TR.view.Main'));

        console.log("fdddd");
    },

    onUpdated: function() {
        window.location.reload();
    }
});
