Ext.application({
    launch: function () {
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
                        spinup: function (spinner, value) {
                            logger(spinner, 'spinup', value);
                        }, // spinup
                        spindown: function (spinner, value) {
                            logger(spinner, 'spindown', value);
                        } // spindown
                    } // listeners
                }] // items (fieldset)
            }] // items (formpanel)
        }); // create()
        
        function logger(target, evtName, value) {
            var tmpl = Ext.create('Ext.XTemplate', '[{evt}] value: {value}'),
                str = tmpl.apply({evt:evtName, value:value});
            target.up('fieldset').setInstructions(str);
        }
    } // launch
}); // application()
