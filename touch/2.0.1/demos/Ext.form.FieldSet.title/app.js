/*global Ext:false */
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
                    placeHolder: 'FieldSet title',
                    listeners: {
                        keyup: function (field, evt) {
                            Ext.getCmp('myFieldSet').setTitle(field.getValue());
                        } // keyup
                    } // listeners
                } // items (toolbar)
            }, {
                xtype: 'fieldset',
                id: 'myFieldSet',
                title: 'FieldSet title',
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
