Ext.define('UserApp.view.user.Edit', {
    extend: 'Ext.window.Window',
    alias : 'widget.userEdit',
    title : 'Edit User',
    layout: 'fit',
    autoShow: true,
    modal: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                id:'usuariosEditF',
                items: [
                    {
                        xtype: 'displayfield',
                        name : 'userID',
                        fieldLabel: 'ID'
                    },
                    {
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: 'Name'
                    },
                    {
                        xtype: 'textfield',
                        name : 'lastname',
                        fieldLabel: 'Last Name'
                    },
                    {
                        xtype: 'numberfield',
                        name: 'age',
                        fieldLabel: 'Age',
                        maxValue: 150,
                        minValue: 0
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});
