/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'fieldset',
                items: [{
                    xtype: 'datepickerfield',
                    label: 'Birthday',
                    name: 'birthday',
                    value: new Date()
                }]
            }, {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [{
                    text: 'getValue',
                    handler: function () {
                        var datePickerField = Ext.ComponentQuery.query('datepickerfield')[0];
                        Ext.Msg.alert(null, datePickerField.getValue());
                    }
                }, {
                    xtype: 'spacer'
                }, {
                    text: 'getFormattedValue',
                    handler: function () {
                        var datePickerField = Ext.ComponentQuery.query('datepickerfield')[0];
                        Ext.Msg.alert(null, datePickerField.getFormattedValue());
                    }
                }]
            }]
        });
    } // launch
}); // application()
