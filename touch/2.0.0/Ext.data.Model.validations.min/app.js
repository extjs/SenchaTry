Ext.application({
    launch: function () {
        Ext.define('UserModel', {
            extend: 'Ext.data.Model',
            config: {
                fields: [{
                    name: 'username',
                    type: 'string'
                }], // fields
                validations: [{
                    field: 'username',
                    type: 'presence',
                    message: 'Username is required.'
                }, {
                    field: 'username',
                    type: 'length',
                    min: 6,
                    max: 12,
                    message: 'Username must be between 6 and 12 characters.'
                }] // validations
            } // config
        }); // define()
        
        var form = Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'titlebar',
                docked: 'top',
                items: [{
                    text: 'Validate form',
                    handler: function () {
                        var values = form.getValues(),
                            usr = Ext.create('UserModel', {
                                username: values.usernameField
                            }),
                            errs = usr.validate(),
                            msg = '';
                        
                        if (!errs.isValid()) {
                            errs.each(function (err) {
                                msg += err.getMessage() + '<br/>';
                            }); // each()
                            Ext.Msg.alert('ERROR', msg);
                        } else {
                            Ext.Msg.alert('SUCCESS', 'Looks like the model is valid!');
                        } // if
                    } // handler
                }] // items (titlebar)
            }, {
                xtype: 'fieldset',
                items: [{
                    xtype: 'textfield',
                    name: 'usernameField',
                    label: 'Username:',
                    required: true
                }] // items (fieldset)
            }] // items (container)
        }); // create()
    } // launch
}); // application()
