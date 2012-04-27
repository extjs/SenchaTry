Ext.application({
    launch: function () {
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    text: 'show selectfield',
                    handler: function () {
                        Ext.getCmp('sel').showPicker();
                    } // handler
                }] // items
            }, {
                xtype: 'fieldset',
                instructions: 'Please select a product.',
                items: [{
                    xtype: 'selectfield',
                    id: 'sel',
                    label: 'Product',
                    options: [{
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
                    }] // options
                }] // items (fieldset)
            }] // items (panel)
        }); // create()
    } // launch
}); // application()
