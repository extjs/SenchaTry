/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.define('UserModel', {
            extend: 'Ext.data.Model',
            config: {
                fields: [{
                    name: 'firstName',
                    type: 'string'
                }, {
                    name: 'lastName',
                    type: 'string'
                }, {
                    name: 'email',
                    type: 'string'
                }], // fields
                validations: [{
                    field: 'firstName',
                    type: 'presence',
                    message: 'First name is required.'
                }, {
                    field: 'lastName',
                    type: 'presence',
                    message: 'Last name is required.'
                }, {
                    field: 'email',
                    type: 'presence',
                    message: 'Email address is required.'
                }] // validations
            } // config
        }); // define()
        
        Ext.create('Ext.Container', {
            fullscreen: true,
            items: [{
                xtype: 'titlebar',
                docked: 'top',
                items: [{
                    text: 'Validate model',
                    handler: function () {
                        var usr = Ext.create('UserModel', {
                                firstName: 'Peter'
                            }),
                            errs = usr.validate(),
                            msg = '';
                        
                        if (!errs.isValid()) {
                            errs.each(function (err) {
                                msg += err.getMessage() + '<br/>';
                            });
                            Ext.Msg.alert('ERROR', msg);
                        } else {
                            Ext.Msg.alert('SUCCESS', 'Looks like the model is valid');
                        } // if
                    } // handler
                }] // items (titlebar)
            }] // items (container)
        }); // create()
    } // launch
}); // application()
