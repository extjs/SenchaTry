Ext.application({
    launch: function () {
        Ext.create('Ext.Panel', {
            fullscreen: true,
            items: [{
                dock: 'top',
                title: '<code>ui: \'dark\'</code> (default)',
                ui: 'dark',
                xtype: 'titlebar'
            }, {
                dock: 'top',
                title: '<code>ui: \'light\'</code>',
                ui: 'light',
                xtype: 'titlebar'
            }, {
                dock: 'top',
                title: '<code>ui: \'neutral\'</code>',
                ui: 'neutral',
                xtype: 'titlebar'
            }] // items
        }); // create()
    } // launch
}); // application()
