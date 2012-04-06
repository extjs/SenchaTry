Ext.application({
    launch: function () {
        Ext.define('MyApp.view.Welcome', {
            extend: 'Ext.Panel',
            config: {
                html: 'Welcome to my app',
                fullscreen: true
            }
        });

        Ext.create('MyApp.view.Welcome');
    } // launch
}); // application()
