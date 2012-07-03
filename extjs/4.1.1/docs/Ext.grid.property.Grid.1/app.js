/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.grid.property.Grid', {
        title: 'Properties Grid',
        width: 300,
        renderTo: Ext.getBody(),
        source: {
            "(name)": "My Object",
            "Created": Ext.Date.parse('10/15/2006', 'm/d/Y'),
            "Available": false,
            "Version": 0.01,
            "Description": "A test object"
        }
    });
});
