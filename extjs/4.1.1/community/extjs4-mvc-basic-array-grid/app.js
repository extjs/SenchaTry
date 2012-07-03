Ext.Loader.setConfig({enabled: true});

Ext.application({
    name: 'Ext4Example',

    controllers: [
        'Stocks'
    ],

    autoCreateViewport: true
});
