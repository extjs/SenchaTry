/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    xtype: 'segmentedbutton',
                    allowDepress: false,
                    items: [{
                        text: 'left'
                    }, {
                        text: 'right'
                    }, {
                        text: 'top',
                        pressed: true
                    }], // items (segmentedbutton)
                    listeners: {
                        toggle: function (segBtn, btn) {
                            var tfield = segBtn.up('formpanel').down('textfield'),
                                value = btn.getText();
                            tfield.setLabel('labelAlign = ' + value);
                            tfield.setLabelAlign(value);
                        } // toggle
                    } // listeners
                }] // items (toolbar)
            }, {
                xtype: 'fieldset',
                items: [{
                    xtype: 'textfield',
                    label: 'labelAlign = top',
                    labelAlign: 'top',
                    value: 'The quick brown fox jumps over the lazy dog.'
                }] // items (fieldset)
            }] // items (formpanel)
        }); // create()
    } // launch
}); // application()
