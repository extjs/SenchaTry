Ext.application({
    launch: function () {
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
                    disabled: true
                }, {
                    xtype: 'checkboxfield',
                    id: 'debug',
                    label: 'disabled:',
                    checked: true,
                    listeners: {
                        check: function (ch, evt) {
                            Ext.getCmp('sl').setDisabled(ch.getChecked());
                        }, // check
                        uncheck: function (ch, evt) {
                            Ext.getCmp('sl').setDisabled(ch.getChecked());
                        } // uncheck
                    } // listeners
                }] // items (fieldset)
            }] // items (panel)
        }); // create()
    } // launch
}); // application()
