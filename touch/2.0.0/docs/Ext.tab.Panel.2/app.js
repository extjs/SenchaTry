/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.TabPanel', {
            fullscreen: true,

            defaults: {
                styleHtmlContent: true
            },

            items: [{
                title: 'Home',
                html: 'Home Screen'
            }, {
                title: 'Contact',
                html: 'Contact Screen'
            }]
        });
    } // launch
}); // application()
