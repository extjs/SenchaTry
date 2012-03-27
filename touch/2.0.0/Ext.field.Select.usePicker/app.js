Ext.application({
    launch: function () {
        var opts = [{
            text: 'Ext JS',
            value: 'extjs'
        }, {
            text: 'Sencha Touch',
            value: 'senchatouch'
        }, {
            text: 'Sencha Animator',
            value: 'animator'
        }, {
            text: 'Sencha Designer',
            value: 'designer'
        }];
        
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'fieldset',
                items: [{
                    xtype: 'selectfield',
                    label: 'usePicker: "auto"',
                    usePicker: 'auto',
                    options: opts
                }, {
                    xtype: 'selectfield',
                    label: 'usePicker: true',
                    usePicker: true,
                    options: opts
                }, {
                    xtype: 'selectfield',
                    label: 'usePicker: false',
                    usePicker: false,
                    options: opts
                }] // items (fieldset)
            }] // items (panel)
        }); // create()
    } // launch
}); // application()
