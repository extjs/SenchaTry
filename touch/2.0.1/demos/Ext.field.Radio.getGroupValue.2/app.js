/*global Ext:false */
Ext.application({
    launch: function () {
        var form = Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    text: 'get checked',
                    handler: function () {
                        Ext.Msg.alert('getValues().product', form.getValues().product);
                    } // handler
                }] // items
            }, {
                xtype: 'fieldset',
                title: 'Products:',
                instructions: 'Please select a product.',
                defaults: {
                    labelWidth: 180
                }, // defaults
                items: [{
                    xtype: 'radiofield',
                    name: 'product',
                    label: 'Ext JS',
                    value: 'extjs'
                }, {
                    xtype: 'radiofield',
                    name: 'product',
                    label: 'Sencha Touch',
                    value: 'senchatouch',
                    checked: true
                }, {
                    xtype: 'radiofield',
                    name: 'product',
                    label: 'Sencha Designer',
                    value: 'designer'
                }] // items (fieldset)
            }] // items (panel)
        }); // create()
    } // launch
}); // application()
