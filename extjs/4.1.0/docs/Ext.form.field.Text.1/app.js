Ext.onReady(function() {
    Ext.create('Ext.form.Panel', {
        title: 'Contact Info',
        width: 300,
        bodyPadding: 10,
        renderTo: Ext.getBody(),
        items: [{
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Name',
            allowBlank: false // requires a non-empty value
        }, {
            xtype: 'textfield',
            name: 'email',
            fieldLabel: 'Email Address',
            vtype: 'email' // requires value to be a valid email address format
        }]
    });
});