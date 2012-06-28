Ext.Loader.setConfig({enabled: true});

Ext.application({
    name: 'ExtMVC',

    paths: { 'Ext.ux': 'ux' },

    controllers: [
        'ForumThreads'
    ],

    autoCreateViewport: true
});
