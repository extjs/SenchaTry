/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.Container', {
            padding: 20,
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    text: 'Toggle Samantha (disabled)',
                    handler: function () {
                        var btn = Ext.ComponentQuery.query('button[name=samanthaButton]')[0];
                        btn.setDisabled(!btn.getDisabled());
                    } // handler
                }, {
                    text: 'Toggle Jonathan (hidden)',
                    handler: function () {
                        var btn = Ext.ComponentQuery.query('button[name=jonathanButton]')[0];
                        btn.setHidden(!btn.getHidden());
                    } // handler
                }] // items (toolbar)
            }, {
                xtype: 'segmentedbutton',
                allowDepress: false,
                items: [{
                    text: 'Tony',
                    pressed: true
                }, {
                    text: 'Angela'
                }, {
                    text: 'Samantha',
                    disabled: true,
                    name: 'samanthaButton'
                }, {
                    text: 'Jonathan',
                    hidden: true,
                    name: 'jonathanButton'
                }, {
                    text: 'Mona'
                }] // items (segmentedbutton)
            }] // items (container)
        }); // create()
    } // launch
}); // application()
