Ext.Loader.setConfig({enabled: true});

Ext.application({
    name: 'ExtMVC',

    controllers: [
        'Books'
    ],

    autoCreateViewport: true
});
