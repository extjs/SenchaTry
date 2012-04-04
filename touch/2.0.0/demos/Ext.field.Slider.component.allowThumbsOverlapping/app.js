Ext.application({
    launch: function () {
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                id: 'tbar',
                title: 'values = [25,75]',
                docked: 'top'
            }, {
                xtype: 'fieldset',
                items: [{
                    xtype: 'checkboxfield',
                    label: 'allowThumbsOverlapping:',
                    checked: true,
                    listeners: {
                        check: function () {
                            Ext.getCmp('sl').getComponent().setAllowThumbsOverlapping(true);
                        }, // check
                        uncheck: function () {
                            Ext.getCmp('sl').getComponent().setAllowThumbsOverlapping(false);
                        } // uncheck
                    } // listeners
                }, {
                    xtype: 'sliderfield',
                    id: 'sl',
                    label: 'sliderfield:',
                    minValue: 0,
                    maxValue: 100,
                    values: [25, 75],
                    component: {
                        allowThumbsOverlapping: true
                    }, // component
                    listeners: {
                        change: function (slider, thumb, newValue, oldValue) {
                            Ext.getCmp('tbar').setTitle('values = [' + slider.getValues() + ']');
                        } // change
                    } // listeners
                }] // items (fieldset)
            }] // items (formpanel)
        }); // create()
    } // launch
}); // application()
