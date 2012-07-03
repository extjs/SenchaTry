Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', 'app/ux');

Ext.application({
    name: 'ExtMVC',

    controllers: [
        'SelectController'
    ],

    autoCreateViewport: true
});
