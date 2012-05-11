/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'fieldset',
                title: 'Are you rich yet?',
                items: [{
                    xtype: 'numberfield',
                    label: 'Salary',
                    value: 30000,
                    minValue: 25000,
                    maxValue: 50000,
                    stepValue: 1000
                }]
            }]
        });
    } // launch
}); // application()
