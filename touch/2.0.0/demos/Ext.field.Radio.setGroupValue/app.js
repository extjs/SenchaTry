Ext.application({
    launch: function () {
        var form = Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    text: 'set checked (senchatouch)',
                    handler: function (btn, evt) {
                        var value = 'senchatouch',
                            radio = btn.up('formpanel').down('radiofield[name=product]');
                        if (!radio.setGroupValue(value)) {
                            Ext.Msg.alert(value + ' was not found');
                        } // if
                    } // handler
                }] // items (toolbar)
            }, {
                xtype: 'fieldset',
                defaults: {
                    xtype: 'radiofield',
                    labelWidth: 180,
                    name: 'product'
                }, // defaults
                items: [{
                    label: 'Ext JS',
                    value: 'extjs'
                }, {
                    label: 'Sencha Touch',
                    value: 'senchatouch'
                }, {
                    label: 'Sencha Designer',
                    value: 'designer'
                }] // items (fieldset)
            }] // items (panel)
        }); // create()
    } // launch
}); // application()
