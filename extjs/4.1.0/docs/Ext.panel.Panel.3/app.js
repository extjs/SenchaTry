/*global Ext:false */
Ext.onReady(function() {
    var resultsPanel = Ext.create('Ext.panel.Panel', {
        title: 'Results',
        width: 600,
        height: 400,
        renderTo: Ext.getBody(),
        layout: {
            type: 'vbox',
            // Arrange child items vertically
            align: 'stretch',
            // Each takes up full width
            padding: 5
        },
        items: [{ // Results grid specified as a config object with an xtype of 'grid'
            xtype: 'grid',
            columns: [{
                header: 'Column One'
            }],
            // One header just for show. There's no data,
            store: Ext.create('Ext.data.ArrayStore', {}),
            // A dummy empty data store
            flex: 1 // Use 1/3 of Container's height (hint to Box layout)
        }, {
            xtype: 'splitter' // A splitter between the two child items
        }, { // Details Panel specified as a config object (no xtype defaults to 'panel').
            title: 'Details',
            bodyPadding: 5,
            items: [{
                fieldLabel: 'Data item',
                xtype: 'textfield'
            }],
            // An array of form fields
            flex: 2 // Use 2/3 of Container's height (hint to Box layout)
        }]
    });
});
