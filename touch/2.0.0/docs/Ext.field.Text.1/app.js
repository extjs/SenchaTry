Ext.application({
    launch: function () {
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'fieldset',
                title: 'Enter your name',
                items: [{
                    xtype: 'textfield',
                    label: 'First Name',
                    name: 'firstName'
                }, {
                    xtype: 'textfield',
                    label: 'Last Name',
                    name: 'lastName'
                }]
            }]
        });
    } // launch
}); // application()
