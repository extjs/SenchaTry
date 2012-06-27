/**
 * @author Andrea Cammarata (@AndreaCammarata)
 * @class RSS.view.News
 * @extends Ext.Container
 * View which contains the real news content downloaded
 * by the selected feed.
 */
Ext.define('RSS.view.News', {
    extend: 'Ext.Container',
    alias: 'widget.news',
    config: {
        cls: 'rss-news',
        styleHtmlContent: true,
        scrollable: 'vertical',
        tpl: [
            '<h2>{title}</h2>',
            '<p>{content}</p>'
        ]
    }
});
