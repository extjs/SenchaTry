Ext.onReady(function() {
    Ext.create('Ext.data.Store', {
        storeId: 'employeeStore',
        fields: ['firstname', 'lastname', 'seniority', 'department'],
        groupField: 'department',
        data: [{
            firstname: "Michael",
            lastname: "Scott",
            seniority: 7,
            department: "Management"
        }, {
            firstname: "Dwight",
            lastname: "Schrute",
            seniority: 2,
            department: "Sales"
        }, {
            firstname: "Jim",
            lastname: "Halpert",
            seniority: 3,
            department: "Sales"
        }, {
            firstname: "Kevin",
            lastname: "Malone",
            seniority: 4,
            department: "Accounting"
        }, {
            firstname: "Angela",
            lastname: "Martin",
            seniority: 5,
            department: "Accounting"
        }]
    });

    Ext.create('Ext.grid.Panel', {
        title: 'Column Template Demo',
        store: Ext.data.StoreManager.lookup('employeeStore'),
        columns: [{
            text: 'Full Name',
            xtype: 'templatecolumn',
            tpl: '{firstname} {lastname}',
            flex: 1
        }, {
            text: 'Department (Yrs)',
            xtype: 'templatecolumn',
            tpl: '{department} ({seniority})'
        }],
        height: 200,
        width: 300,
        renderTo: Ext.getBody()
    });
});