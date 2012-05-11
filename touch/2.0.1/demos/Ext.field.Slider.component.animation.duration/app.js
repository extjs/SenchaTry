/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                id: 'tbar',
                title: 'value = 0',
                docked: 'top'
            }, {
                xtype: 'fieldset',
                items: [{
                    xtype: 'spinnerfield',
                    label: 'animation.duration:',
                    minValue: 0,
                    maxValue: 5000,
                    value: 5000,
                    increment: 500,
                    listeners: {
                        spin: function (spinner, value, direction) {
                            Ext.getCmp('slider').getComponent().config.animation.duration = value;
                        } // spin
                    } // listeners
                }, {
                    xtype: 'sliderfield',
                    id: 'slider',
                    label: 'sliderfield:',
                    minValue: 0,
                    maxValue: 100,
                    component: {
                        animation: {
                            duration: 5000 /* ms */
                        } // animation
                    }, // component
                    listeners: {
                        change: function (slider, thumb, newValue, oldValue) {
                            Ext.getCmp('tbar').setTitle('value = ' + slider.getValue());
                        } // change
                    } // listeners
                }] // items (fieldset)
            }] // items (formpanel)
        }); // create()
    } // launch
}); // application()
