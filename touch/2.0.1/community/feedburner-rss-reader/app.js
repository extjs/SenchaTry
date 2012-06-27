/**
 * @author Andrea Cammarata (@AndreaCammarata)
 * FeedBurner RSS application.
 * This application developed using Sencha Touch 2, allows
 * to read FeedBurner Feeds supporing some interesting features like:
 *
 * - History
 * - Deep Linking
 * - DataView Components
 * - Custom Card Layout animation
 * - Custom JsonP proxy
 * - LocalStorage 
 *
 */

//Setting the Ext Loader configuration
Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'RSS.tux': 'tux',
        'RSS.override': 'override'
    }
});

//Setting an alias for the custom JsonP proxy
Ext.ClassManager.setAlias('RSS.tux.data.proxy.FeedBurner', 'proxy.feedburner');

//Definition of the application
Ext.application({
    
    //Swtting the application name
    name: 'RSS',

    //Setting the application requirements
    requires: [
        'RSS.override.data.proxy.Server',
        'RSS.tux.util.Url'
    ],

    //Including all the app Controllers
    controllers: [
        'Feeds'
    ],

    //Including all the app Models
    models: [
        'Feed',
        'News'
    ],

    //Including all the app Stores
    stores: [
        'Feeds',
        'News'
    ],

    //Including all the view handled by this controller
    views: [
        'Feeds',
        'NewsList',
        'NewsContainer',
        'News',
        'New'
    ],
    
    //Setting the Viewport configuration
    viewport: {
        layout: {
            type: 'card',
            animation: {
                type: 'slide'
            }
        }    
    },

    //Application entry point
    launch: function(){}

});
