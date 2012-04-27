Ext.application({
    launch: function () {
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'fieldset',
                items: [{
                    xtype: 'spinnerfield',
                    label: 'groupButtons = true',
                    groupButtons: true
                }, {
                    xtype: 'spinnerfield',
                    label: 'groupButtons = false',
                    groupButtons: false
                }] // items (fieldset)
            }] // items (formpanel)
        }); // create()
    } // launch
}); // application()
