Ext.application({
    launch: function () {
        Ext.create('Ext.form.FormPanel', {
            fullscreen: true,
            items: [{
                xtype: 'fieldset',
                title: 'Ext.field.Text clearicontap example:',
                instructions: 'Click the clear icon (X) above to dispatch the <code>clearicontap</code> event.',
                items: [{
                    xtype: 'textfield',
                    clearIcon: true,
                    label: 'clearIcon: true (default)',
                    value: 'Click icon to clear text >>>',
                    listeners: {
                        clearicontap: function (txt, evt) {
                            Ext.Msg.alert('You clicked the clear icon');
                        } // clearicontap
                    } // listeners
                }] // items (fieldset)
            }] // items (formpanel)
        }); // create()
    } // launch
}); // application()
