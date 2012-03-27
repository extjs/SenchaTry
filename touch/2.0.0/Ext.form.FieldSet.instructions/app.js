Ext.application({
    launch: function () {
        var contactForm = Ext.create('Ext.form.FormPanel', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: {
                    xtype: 'textfield',
                    name: 'search',
                    placeHolder: 'Set FieldSet instructions',
                    listeners: {
                        keyup: function (field, evt) {
                            Ext.getCmp('myFieldSet').setInstructions(field.getValue());
                        } // keyup
                    } // listeners
                } // titlebar
            }, {
                xtype: 'fieldset',
                id: 'myFieldSet',
                title: 'FieldSet title',
                instructions: 'FieldSet instructions. <strong>Note:</strong> This can include <a href="http://sencha.com/" target="_blank">HTML</a> tags.',
                items: [{
                    xtype: 'textfield',
                    name: 'fname',
                    label: 'First name:'
                }, {
                    xtype: 'textfield',
                    name: 'lname',
                    label: 'Last name:'
                }] // items (fieldset)
            }] // items (formpanel)
        }); // create()
    } // launch
}); // application()
