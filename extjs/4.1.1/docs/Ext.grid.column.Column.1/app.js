/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.data.Store', {
        storeId: 'employeeStore',
        fields: ['firstname', 'lastname', 'seniority', 'dep', 'hired'],
        data: [{
            firstname: "Michael",
            lastname: "Scott",
            seniority: 7,
            dep: "Management",
            hired: "01/10/2004"
        }, {
            firstname: "Dwight",
            lastname: "Schrute",
            seniority: 2,
            dep: "Sales",
            hired: "04/01/2004"
        }, {
            firstname: "Jim",
            lastname: "Halpert",
            seniority: 3,
            dep: "Sales",
            hired: "02/22/2006"
        }, {
            firstname: "Kevin",
            lastname: "Malone",
            seniority: 4,
            dep: "Accounting",
            hired: "06/10/2007"
        }, {
            firstname: "Angela",
            lastname: "Martin",
            seniority: 5,
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
            tpl: '{dep} ({seniority})'
        }],
        width: 400,
        forceFit: true,
        renderTo: Ext.getBody()
    });
});
