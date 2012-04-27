Ext.onReady(function() {
    Ext.create('Ext.form.Panel', {
        title: 'Personal Info',
        width: 300,
        bodyPadding: 10,
        renderTo: Ext.getBody(),
        items: [{
            xtype: 'numberfield',
            anchor: '100%',
            name: 'age',
            fieldLabel: 'Age',
            minValue: 0,
            //prevents negative numbers
            // Remove spinner buttons, and arrow key and mouse wheel listeners
            hideTrigger: true,
            keyNavEnabled: false,
            mouseWheelEnabled: false
        }]
    });
});