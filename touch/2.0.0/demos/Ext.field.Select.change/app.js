Ext.application({
    launch: function () {
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    text: 'get selected item',
                    handler: function () {
                        Ext.Msg.alert('getValue()', Ext.getCmp('sel').getValue());
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
                    }], // options
                    listeners: {
                        change: function (select, newValue, oldValue) {
                            Ext.Msg.alert('change', newValue.data.value);
                        } // change
                    } // listeners
                }] // items (fieldset)
            }] // items (panel)
        }); // create()
    } // launch
}); // application()
