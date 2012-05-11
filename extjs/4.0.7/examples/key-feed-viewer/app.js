/*global Ext:false */
Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', 'ux');

Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.Action',
    'Ext.tab.*',
    'Ext.button.*',
    'Ext.form.*',
    'Ext.layout.container.Card',
    'Ext.layout.container.Border',
    'Ext.ux.PreviewPlugin',
    'Ext.FocusManager',
    'Ext.toolbar.Spacer'
]);

Ext.onReady(function(){
    Ext.FocusManager.enable(true);
    var app = new FeedViewer.App();
});
