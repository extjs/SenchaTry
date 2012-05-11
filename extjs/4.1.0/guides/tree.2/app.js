/*global Ext:false */
Ext.onReady(function() {
    var tree = Ext.create('Ext.tree.Panel', {
        renderTo: Ext.getBody(),
        title: 'TreeGrid',
        width: 300,
        height: 150,
        fields: ['name', 'description'],
        columns: [{
            xtype: 'treecolumn',
            text: 'Name',
            dataIndex: 'name',
            width: 150,
            sortable: true
        }, {
            text: 'Description',
            dataIndex: 'description',
            flex: 1,
            sortable: true
        }],
        root: {
            name: 'Root',
            description: 'Root description',
            expanded: true,
            children: [{
                name: 'Child 1',
                description: 'Description 1',
                leaf: true
            }, {
                name: 'Child 2',
                description: 'Description 2',
                leaf: true
            }]
        }
    });
});
