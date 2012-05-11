/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'fieldset',
                title: 'Register',
                items: [{
                    xtype: 'emailfield',
                    label: 'Email',
                    name: 'email'
                }, {
                    xtype: 'passwordfield',
                    label: 'Password',
                    name: 'password'
                }]
            }]
        });
    } // launch
}); // application()
