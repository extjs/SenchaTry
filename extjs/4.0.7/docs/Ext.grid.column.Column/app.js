Ext.onReady(function () {
    Ext.create('Ext.data.Store', {
        storeId: 'employeeStore',
        fields: ['firstname', 'lastname', 'senority', 'dep', 'hired'],
        data: [{
            firstname: "Michael",
            lastname: "Scott",
            senority: 7,
            dep: "Manangement",
            hired: "01/10/2004"
        }, {
            firstname: "Dwight",
            lastname: "Schrute",
            senority: 2,
            dep: "Sales",
            hired: "04/01/2004"
        }, {
            firstname: "Jim",
            lastname: "Halpert",
            senority: 3,
            dep: "Sales",
            hired: "02/22/2006"
        }, {
            firstname: "Kevin",
            lastname: "Malone",
            senority: 4,
            dep: "Accounting",
            hired: "06/10/2007"
        }, {
            firstname: "Angela",
            lastname: "Martin",
            senority: 5,
            dep: "Accounting",
            hired: "10/21/2008"
        }]
    });

    Ext.create('Ext.grid.Panel', {
        title: 'Column Demo',
        store: Ext.data.StoreManager.lookup('employeeStore'),
        columns: [{
            text: 'First Name',
            dataIndex: 'firstname'
        }, {
            text: 'Last Name',
            dataIndex: 'lastname'
        }, {
            text: 'Hired Month',
            dataIndex: 'hired',
            xtype: 'datecolumn',
            format: 'M'
        }, {
            text: 'Department (Yrs)',
            xtype: 'templatecolumn',
            tpl: '{dep} ({senority})'
        }],
        width: 400,
        forceFit: true,
        renderTo: Ext.getBody()
    });
});
