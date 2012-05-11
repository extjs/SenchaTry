/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.form.FormPanel', {
            fullscreen: true,
            items: [{
                xtype: 'fieldset',
                title: 'FieldSet clearIcon example:',
                items: [{
                    xtype: 'textfield',
                    label: 'clearIcon: true (default)',
                    value: 'I will show a clear icon >>>',
                    clearIcon: true
                }, {
                    xtype: 'textfield',
                    label: 'clearIcon: false',
                    value: 'I will NOT show a clear icon >>>',
                    clearIcon: false
                }] // items (fieldset)
            }] // items (formpanel)
        }); // create()
    } // launch
}); // application()
