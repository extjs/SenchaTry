Ext.application({
    launch: function () {
        Ext.create('Ext.Carousel', {
            fullscreen: true,
            items: [{
                xtype: 'list',
                items: {
                    xtype: 'toolbar',
                    dock: 'top',
                    title: 'Sencha Touch Team'
                },
                store: {
                    fields: ['name'],
                    data: [{
                        name: 'Rob'
                    }, {
                        name: 'Ed'
                    }, {
                        name: 'Jacky'
                    }, {
                        name: 'Jamie'
                    }, {
                        name: 'Tommy'
                    }, {
                        name: 'Abe'
                    }]
                },
                itemTpl: '{name}'
            }, {
                xtype: 'fieldset',
                items: [{
                    xtype: 'toolbar',
                    dock: 'top',
                    title: 'Login'
                }, {
                    xtype: 'textfield',
                    label: 'Name'
                }, {
                    xtype: 'passwordfield',
                    label: 'Password'
                }]
            }]
        });
    } // launch
}); // application()
