Ext.application({
    launch: function() {
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'fieldset',
                title: 'About You',
                instructions: 'Tell us all about yourself',
                items: [{
                    xtype: 'textfield',
                    name: 'firstName',
                    label: 'First Name'
                }, {
                    xtype: 'textfield',
                    name: 'lastName',
                    label: 'Last Name'
                }]
            }]
        });
    }
});
