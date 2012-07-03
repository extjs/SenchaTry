Ext.require([
    'Ext.grid.*',
    'Ext.data.*'
]);

Ext.define('Post', {
    extend: 'Ext.data.Model',
    fields: [
       {name: 'post'},
       {name: 'desc'}
    ]   
});

Ext.onReady(function() {

    // sample static data for the store
    var myData = [
        ['ExtJS 4 Grid Multiline Row',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed metus nibh,'+ 
        'sodales a, porta at, vulputate eget, dui. Pellentesque ut nisl. Maecenas tortor turpis,'+ 
        'interdum non, sodales non, iaculis ac, lacus. Vestibulum auctor, tortor quis iaculis malesuada,'+ 
        'libero lectus bibendum purus, sit amet tincidunt quam turpis vel lacus. In pellentesque nisl non'+ 
        'sem. Suspendisse nunc sem, pretium eget, cursus a, fringilla vel, urna.'+
        'Aliquam commodo ullamcorper erat. Nullam vel justo in neque porttitor laoreet. Aenean lacus dui,'+ 
        'consequat eu, adipiscing eget, nonummy non, nisi. Morbi nunc est, dignissim non, ornare sed,'+ 
        'luctus eu,'+ 
        'massa. Vivamus eget quam. Vivamus tincidunt diam nec urna. Curabitur velit.']
    ];

    // create the data store
    var store = Ext.create('Ext.data.ArrayStore', {
        model: 'Post',
        data: myData
    });

    // create the Grid
    var grid = Ext.create('Ext.grid.Panel', {
        store: store,
        stateful: true,
        collapsible: true,
        multiSelect: true,
        columns: [
            {
                text     : 'Post',
                width    : 150,
                sortable : false,
                dataIndex: 'post'
            },
            {
                text     : 'Description',
                flex     : 1,
                sortable : false,
                dataIndex: 'desc'
            }
        ],
        height: 200,
        width: 600,
        title: 'Array Grid',
        renderTo: 'grid-example',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
        }
    });
});
