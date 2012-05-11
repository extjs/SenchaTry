/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'fieldset',
                items: [{
                    xtype: 'sliderfield',
                    label: 'slider:',
                    minValue: 0,
                    maxValue: 200,
                    increment: 10,
                    listeners: {
                        change: function (slider, thumb, newVal, oldVal) {
                            Ext.getCmp('debug').setValue(newVal);
                        } // change
                    } // listeners
                }, {
                    xtype: 'textfield',
                    id: 'debug',
                    label: 'value:',
                    readOnly: true
                }] // items (fieldset)
            }] // items (panel)
        }); // create()
    } // launch
}); // application()
