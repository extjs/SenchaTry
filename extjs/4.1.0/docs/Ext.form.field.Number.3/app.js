/*global Ext:false */
Ext.onReady(function() {
    Ext.create('Ext.form.Panel', {
        renderTo: Ext.getBody(),
        title: 'Step',
        width: 300,
        bodyPadding: 10,
        items: [{
            xtype: 'numberfield',
            anchor: '100%',
            name: 'evens',
            fieldLabel: 'Even Numbers',

            // Set step so it skips every other number
            step: 2,
            value: 0,

            // Add change handler to force user-entered numbers to evens
            listeners: {
                change: function(field, value) {
                    value = parseInt(value, 10);
                    field.setValue(value + value % 2);
                }
            }
        }]
    });
});
