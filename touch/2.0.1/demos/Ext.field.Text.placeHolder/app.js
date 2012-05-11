/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.form.FormPanel', {
            fullscreen: true,
            items: [{
                xtype: 'fieldset',
                items: [{
                    xtype: 'textfield',
                    name: 'pHolder',
                    label: 'Set placeHolder:',
                    placeHolder: '*** Type here ***',
                    listeners: {
                        keyup: function (txt, evt) {
                            Ext.getCmp('tf').setPlaceHolder(txt.getValue());
                        } // keyup
                    } // listeners
                }, {
                    xtype: 'textfield',
                    id: 'tf',
                    name: 'demo',
                    label: 'placeHolder demo:',
                    placeHolder: 'Updated placeHolder text appears here'
                }] // items
            }] // items
        }); // create()
    } // launch
}); // application()
