Ext.define('UserApp.view.user.Create', {
    extend: 'Ext.window.Window',
    alias : 'widget.userCreate',

    title : 'Create User',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    
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
