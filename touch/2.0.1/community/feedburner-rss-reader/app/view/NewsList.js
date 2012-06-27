/**
 * @author Andrea Cammarata (@AndreaCammarata)
 * @class RSS.view.NewsList
 * @extends Ext.List
 * View which contains all the news related
 * to the user selected field.
 */
Ext.define('RSS.view.NewsList', {
    extend: 'Ext.List',
    alias: 'widget.newslist',
    config: {
        cls: 'rss-news-list',
        store: 'News',
        itemTpl: [
            '<h1>{title}</h1>',
            '<p class="content">{contentSnippet}</p>',
            '<span class="author">{author}</span>',
            '<span class="date">{friendlyDate}</span>',
        ],
        items: [
            {
                //Definition of the top docked toolbar
                xtype: 'toolbar',
                docked: 'top',
                title: 'News',
                items: [
                    {
                        /* Definition of the button that allows
                         * the user to go back to the feeds view. */
                        text: 'Feeds',
                        action: 'showfeeds',
                        ui: 'back',
                        navigation: true
                    }
                ]
            }
        ]
    }    
});
