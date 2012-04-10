Ext.onReady(function () {
    Ext.create('Ext.form.Panel', {
        title: 'FieldContainer Example',
        width: 350,
        bodyPadding: 10,

        items: [{
            xtype: 'fieldcontainer',
            fieldLabel: 'Your Name',
            labelWidth: 75,
            defaultType: 'textfield',

            // Arrange fields vertically, stretched to full width
            layout: 'anchor',
            defaults: {
                layout: '100%'
            },

            // These config values will be applied to both sub-fields, except
            // for Last Name which will use its own msgTarget.
            fieldDefaults: {
                msgTarget: 'under',
                labelAlign: 'top'
            },

            items: [{
                fieldLabel: 'First Name',
                name: 'firstName'
            }, {
                fieldLabel: 'Last Name',
                name: 'lastName',
                msgTarget: 'under'
            }]
        }],
        renderTo: Ext.getBody()
    });
});