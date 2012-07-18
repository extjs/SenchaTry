Ext.define('TR.view.featured.List', {
    extend: 'Ext.dataview.DataView',
    alias: 'widget.featuredlist',
    config: {
        store: 'FeaturedPhotos',
        itemTpl: '<img src="http://src.sencha.io/{[Ext.Viewport.getOrientation()]}/{photo_url}" />',
        title: 'Featured',
        iconCls: 'hot',
        iconMask: true
    }
});