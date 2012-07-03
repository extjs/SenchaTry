Ext.Loader.setConfig({enabled: true});

Ext.application({
    name: 'ExtMVC',

    /*controllers: [
        'Contacts'
    ],*/

    requires: [
        'Ext.layout.container.*',
        'Ext.resizer.Splitter',
        'Ext.fx.target.Element',
        'Ext.fx.target.Component',
        'Ext.window.Window'/*,
        'ExtMVC.view.app.*'*/
    ],

    autoCreateViewport: true
});
