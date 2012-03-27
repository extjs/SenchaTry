Ext.application({
    launch: function () {
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'fieldset',
                instructions: 'Drag the Slider thumb to update the <code>labelWidth</code> value.',
                items: [{
                    xtype: 'sliderfield',
                    label: 'labelWidth:',
                    minValue: 0,
                    maxValue: 200,
                    value: 150,
                    listeners: {
                        change: function (slider, thumb, newVal, oldVal) {
                            var dbg = Ext.getCmp('debug');
                            dbg.setValue(newVal);
                            dbg.setLabelWidth(newVal);
                        } // change
                    } // listeners
                }] // items (fieldset)
            }, {
                xtype: 'fieldset',
                items: [{
                    xtype: 'textfield',
                    id: 'debug',
                    label: 'textfield label:',
                    labelWidth: 150,
                    value: 150,
                    readOnly: true
                }] // items (fieldset)
            }] // items (panel)
        }); // create()
    } // launch
}); // application()
