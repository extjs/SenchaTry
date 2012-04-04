Ext.application({
    launch: function () {
        var tmpl = Ext.create('Ext.XTemplate', '[{evt}] value: {value}, direction: \'{dir}\'');
        
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'fieldset',
                id: 'fset',
                items: [{
                    xtype: 'spinnerfield',
                    label: 'value:',
                    increment: 1,
                    listeners: {
                        spin: function (spinner, value, dir) {
                            var str = tmpl.apply({evt:'spin', value:value, dir:dir});
                            spinner.up('fieldset').setInstructions(str);
                        } // spin
                    } // listeners
                }] // items (fieldset)
            }] // items (formpanel)
        }); // create()
    } // launch
}); // application()
