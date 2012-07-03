Ext.define('UserApp.controller.User', {
    extend: 'Ext.app.Controller',
    stores: ['User'],
    views: [
        'user.List',
        'user.Edit',
        'user.Create'
    ],
    
    init: function() {
        console.log('Initialized Users! This happens before the Application launch function is called');
        
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            },
            'userList': {
                itemdblclick: this.editUser,
                selectionchange: this.selectUser
            },
            
            'userList button[action=addUser]': {
                click: this.newUser
            },
            
            'userList button[action=delete]': {
                click: this.deleteUserClick
            },
            'userEdit button[action=save]': {
                click: this.updateUser
            },
            'userCreate button[action=save]': {
                click: this.createUser
            }
        });
    },
    
    onPanelRendered: function() {
        console.log('The panel was rendered');
    },
    
    selectUser: function(selModel, selections) {
        console.log('select'); 
        var delBut = Ext.ComponentQuery.query('#deleteUser')[0];
        delBut.setDisabled(false);
        //list['toolbar'].('#deleteUsuario').setDisabled(selections.length === 0);
        //console.log(grid.down('#delete'));
    },
    
    editUser: function(grid, record) {
        console.log('Double clicked on ' + record.get('name'));
        var view = Ext.widget('userEdit');
        view.down('form').loadRecord(record);
        
    },
    
    newUser: function(button) {
        console.log('Create');
        var view = Ext.widget('userCreate');
        view.down('form');
    },
    
    updateUser: function(button) {
        console.log('clicked the Save button');
            var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
            var viewEF = form.getForm();
            console.log(viewEF);
        if (viewEF.isValid()) {
            record.set(values);
            win.close();
            this.getUserStore().sync();
        }
    },
    
    createUser: function(button) {
        console.log('clicked the Save button Create');
            var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        //record.set(values);
        console.log(values);
        this.getUserStore().add(values);
        win.close();
        
        this.getUserStore().sync();
    },
    
    deleteUserClick: function(selModel, selections) {
       // console.log('clicked Delete');
        var viewList = Ext.ComponentQuery.query('#userID')[0];
       // console.log(viewList.getSelectionModel().getSelection()[0]);
        var selection=viewList.getSelectionModel().getSelection()[0];
        if(selection)
        {
            this.getUserStore().remove(selection);
            this.getUserStore().sync();
        }
        
    }
});
