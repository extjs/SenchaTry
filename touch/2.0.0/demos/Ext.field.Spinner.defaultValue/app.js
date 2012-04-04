Ext.application({
    launch: function () {
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'fieldset',
                instructions: '<code>value = undefined; defaultValue = 9;</code>',
                items: [{
                    xtype: 'spinnerfield',
                    increment: 1,
                    label: 'defaultValue = 9',
                    value: undefined,
                    defaultValue: 9,
                    minValue: 1,
                    maxValue: 12
                }] // items (fieldset)
            }] // items (formpanel)
        }); // create()
    } // launch
}); // application()
