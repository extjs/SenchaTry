Ext.application({
    launch: function () {
        var formPanel = Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'fieldset',
                items: [{
                    xtype: 'textfield',
                    name: 'name',
                    label: 'Name'
                }, {
                    xtype: 'emailfield',
                    name: 'email',
                    label: 'Email'
                }, {
                    xtype: 'passwordfield',
                    name: 'password',
                    label: 'Password'
                }]
            }]
        });

        formPanel.add({
            xtype: 'toolbar',
            docked: 'bottom',
            layout: {
                pack: 'center'
            },
            items: [{
                xtype: 'button',
                text: 'Set Data',
                handler: function () {
                    formPanel.setValues({
                        name: 'Ed',
                        email: 'ed@sencha.com',
                        password: 'secret'
                    });
                }
            }, {
                xtype: 'button',
                text: 'Get Data',
                handler: function () {
                    Ext.Msg.alert('Form Values', JSON.stringify(formPanel.getValues(), null, 2));
                }
            }, {
                xtype: 'button',
                text: 'Clear Data',
                handler: function () {
                    formPanel.reset();
                }
            }]
        });
    } // launch
}); // application()
