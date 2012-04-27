Ext.application({
    launch: function() {
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
                    xtype: 'spacer'
                }, {
                    text: 'setValue',
                    handler: function() {
                        var datePickerField = Ext.ComponentQuery.query('datepickerfield')[0];

                        var randomNumber = function(from, to) {
                                return Math.floor(Math.random() * (to - from + 1) + from);
                            };

                        datePickerField.setValue({
                            month: randomNumber(0, 11),
                            day: randomNumber(0, 28),
                            year: randomNumber(1980, 2011)
                        });
                    }
                }, {
                    xtype: 'spacer'
                }]
            }]
        });
    }
});