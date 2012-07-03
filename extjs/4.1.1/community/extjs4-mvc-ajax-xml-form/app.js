Ext.Loader.setConfig({enabled: true});

Ext.application({
    name: 'ExtMVC',

    controllers: [
        'Contacts'
    ],

    autoCreateViewport: true
});
