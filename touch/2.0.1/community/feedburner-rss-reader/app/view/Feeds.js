/**
 * @author Andrea Cammarata (@AndreaCammarata)
 * @class RSS.view.Feeds
 * @extends Ext.DataView
 * View which allow the user to handle all the feeds
 * handled by the application.
 */
Ext.define('RSS.view.Feeds', {
    extend: 'Ext.DataView',
    alias: 'widget.feedlist',
    requires: [
        'RSS.tux.dataview.FeedListItem'
    ],
    /* Definition of the view configuration.
     * Please not how the Dataview is configured to use
     * compomponents instead using the the element-based approach. */
    config: {
        cls: 'rss-feed-list',
        store: 'Feeds',
        useComponents: true,
        defaultType: 'feedlistitem',
        items: [
            {
                //Definition of the top docked toolbar
                xtype: 'toolbar',
                docked: 'top',
                title: 'Feeds',
                items: [
                    {
                        /* Definition of the button which allow the user
                         * to add a new feed. */
                        text: 'New',
                        action: 'addfeed'
                    }
                ]
            }
        ]
    }    
});
