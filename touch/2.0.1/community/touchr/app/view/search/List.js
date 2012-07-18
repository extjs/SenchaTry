Ext.define('TR.view.search.List', {
    extend: 'Ext.dataview.DataView',
    alias: 'widget.searchlist',
    config: {
        title: 'Search',
        iconCls: 'search',
        store: 'Search',
        itemTpl: '<img src="http://src.sencha.io/{[Ext.Viewport.getOrientation()]}/{photo_url}" />',
        iconMask: true,
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            ui: 'light',
            items: [{
                xtype: 'searchfield',
                placeHolder: 'Search by keywords...',
                flex: 1
            }]
        }]
    }
});