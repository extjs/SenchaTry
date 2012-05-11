/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: {
                    text: 'toggle cycle',
                    handler: function () {
                        var spnnr = Ext.getCmp('spnnr');
                        spnnr.setCycle(!spnnr.getCycle());
                        spnnr.setLabel('cycle = ' + spnnr.getCycle());
                    } // handler
                } // items
            }, {
                xtype: 'fieldset',
                instructions: '<code>minValue = 10; maxValue = 20;</code>',
                items: [{
                    xtype: 'spinnerfield',
                    id: 'spnnr',
                    cycle: true,
                    label: 'cycle = true',
                    minValue: 10,
                    maxValue: 20
                }] // items (fieldset)
            }] // items (formpanel)
        }); // create()
    } // launch
}); // application()
