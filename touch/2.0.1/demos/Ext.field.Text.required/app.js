/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.form.Panel', {
            id: 'userForm',
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                ui: 'neutral',
                docked: 'top',
                items: [{
                    xtype: 'checkboxfield',
                    label: 'required:',
                    name: 'isRequired',
                    checked: true,
                    listeners: {
                        check: function () {
                            this.up('formpanel').down('textfield[name=fName]').setRequired(true);
                        }, // check
                        uncheck: function () {
                            this.up('formpanel').down('textfield[name=fName]').setRequired(false);
                        } // uncheck
                    } // listeners
                }] // items
            }, {
                xtype: 'fieldset',
                title: 'Tell us about yourself...',
                instructions: '<code>(*)</code> REQUIRED',
                items: [{
                    xtype: 'textfield',
                    label: 'First name:',
                    name: 'fName',
                    required: true
                }, {
                    xtype: 'textfield',
                    label: 'Last name:',
                    name: 'lName'
                }] // items
            }, {
                xtype: 'button',
                text: 'Submit',
                handler: function () {
                    var values = this.up('formpanel#userForm').getValues();
                    Ext.Msg.alert('userForm.getValues():', Ext.JSON.encode(values));
                } // handler
            }] // items
        }); // create()
    } // launch
}); // application()
