Ext.define('UserApp.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.userList',
    id:'userID',
    store: 'User',
    title : 'Users',
    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            iconCls: 'user_add',
            text: 'Add',
            action: 'addUser'
        }, {
            iconCls: 'user_delete',
            text: 'Delete',
            disabled: true,
            itemId: 'deleteUser',
            action: 'delete'
        }]
    },{
        xtype: 'pagingtoolbar',
        store: 'User',   // mismo que el store GridPanel
        dock: 'bottom',
        displayInfo: true
    }],
    initComponent: function() {

        this.columns = [
            {header: 'ID',  dataIndex: 'userID',  flex: 1},
            {header: 'Name',  dataIndex: 'name',  flex: 1},
            {header: 'Last Name',  dataIndex: 'lastname',  flex: 1},
            {header: 'Age', dataIndex: 'age', flex: 1}
        ];

        this.callParent(arguments);
    }
});
