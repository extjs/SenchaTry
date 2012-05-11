/*global Ext:false */
Ext.onReady(function() {
    var store = Ext.create('Ext.data.Store', {
        storeId: 'employeeStore',
        fields: ['name', 'seniority', 'department'],
        groupField: 'department',
        data: {
            'employees': [{
                "name": "Michael Scott",
                "seniority": 7,
                "department": "Management"
            }, {
                "name": "Dwight Schrute",
                "seniority": 2,
                "department": "Sales"
            }, {
                "name": "Jim Halpert",
                "seniority": 3,
                "department": "Sales"
            }, {
                "name": "Kevin Malone",
                "seniority": 4,
                "department": "Accounting"
            }, {
                "name": "Angela Martin",
                "seniority": 5,
                "department": "Accounting"
            }]
        },
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'employees'
            }
        }
    });

    Ext.create('Ext.grid.Panel', {
        title: 'Employees',
        store: Ext.data.StoreManager.lookup('employeeStore'),
        columns: [{
            header: 'Name',
            dataIndex: 'name'
        }, {
            header: 'Seniority',
            dataIndex: 'seniority'
        }],
        features: [{
            ftype: 'grouping'
        }],
        width: 200,
        height: 275,
        renderTo: Ext.getBody()
    });
});
