/*global Ext:false */
Ext.application({
    launch: function () {
        var debugValue,
            debugValues;
        
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'fieldset',
                items: [{
                    xtype: 'sliderfield',
                    id: 'sl',
                    label: 'slider:',
                    minValue: 0,
                    maxValue: 200,
                    values: [40,140],
                    listeners: {
                        painted: function (sl) {
                            debugValue = Ext.getCmp('debugValue');
                            debugValues = Ext.getCmp('debugValues');
                            
                            debugValue.setValue(sl.getValue());
                            debugValues.setValue(Ext.JSON.encode(sl.getValues()));
                        }, // painted
                        change: function (slider, thumb, newVal, oldVal) {
                            debugValue.setValue(newVal);
                            debugValues.setValue(Ext.JSON.encode(slider.getValues()));
                        } // change
                    } // listeners
                }, {
                    xtype: 'textfield',
                    id: 'debugValue',
                    label: 'value:',
                    readOnly: true
                }, {
                    xtype: 'textfield',
                    id: 'debugValues',
                    label: 'values:',
                    readOnly: true
                }] // items (fieldset)
            }] // items (panel)
        }); // create()
    } // launch
}); // application()
