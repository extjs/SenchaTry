Ext.application({
    launch: function () {
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'fieldset',
                instructions: '<code>minValue = 10; maxValue = 30; increment = 2;</code>',
                items: [{
                    xtype: 'spinnerfield',
                    cycle: true,
                    label: 'increment = 2',
                    increment: 2,
                    minValue: 10,
                    maxValue: 30
                }] // items (fieldset)
            }] // items (formpanel)
        }); // create()
    } // launch
}); // application()
