Ext.onReady(function () {
    Ext.create('Ext.Panel', {
        width: 500,
        height: 300,
        title: "FormLayout Panel",
        layout: 'form',
        renderTo: Ext.getBody(),
        bodyPadding: 5,
        defaultType: 'textfield',
        items: [{
            fieldLabel: 'First Name',
            name: 'first',
            allowBlank: false
        }, {
            fieldLabel: 'Last Name',
            name: 'last'
        }, {
            fieldLabel: 'Company',
            name: 'company'
        }, {
            fieldLabel: 'Email',
            name: 'email',
            vtype: 'email'
        }, {
            fieldLabel: 'DOB',
            name: 'dob',
            xtype: 'datefield'
        }, {
            fieldLabel: 'Age',
            name: 'age',
            xtype: 'numberfield',
            minValue: 0,
            maxValue: 100
        }, {
            xtype: 'timefield',
            fieldLabel: 'Time',
            name: 'time',
            minValue: '8:00am',
            maxValue: '6:00pm'
        }]
    });
});
