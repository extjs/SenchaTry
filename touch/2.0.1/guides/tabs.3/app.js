Ext.application({
    launch: function() {
        Ext.create('Ext.TabPanel', {
            fullscreen: true,

            defaults: {
                styleHtmlContent: true
            },

            layout: {
                type: 'card',
                animation: {
                    type: 'fade'
                }
            },

            items: [{
                title: 'Home',
                html: 'Home Screen'
            }, {
                title: 'Contact',
                html: 'Contact Screen'
            }]
        });
    }
});