Ext.onReady(function() {
    // All columns are percentages -- they must add up to 1
    Ext.create('Ext.panel.Panel', {
        title: 'Column Layout - Percentage Only',
        width: 350,
        height: 250,
        layout: 'column',
        items: [{
            title: 'Column 1',
            columnWidth: 0.25
        }, {
            title: 'Column 2',
            columnWidth: 0.55
        }, {
            title: 'Column 3',
            columnWidth: 0.20
        }],
        renderTo: Ext.getBody()
    });

    // Mix of width and columnWidth -- all columnWidth values must add up
    // to 1. The first column will take up exactly 120px, and the last two
    // columns will fill the remaining container width.
    Ext.create('Ext.Panel', {
        title: 'Column Layout - Mixed',
        width: 350,
        height: 250,
        layout: 'column',
        items: [{
            title: 'Column 1',
            width: 120
        }, {
            title: 'Column 2',
            columnWidth: 0.7
        }, {
            title: 'Column 3',
            columnWidth: 0.3
        }],
        renderTo: Ext.getBody()
    });
});