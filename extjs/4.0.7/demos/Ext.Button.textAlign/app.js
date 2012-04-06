Ext.onReady(function () {
    Ext.create('Ext.Container', {
        id:'container',
        items: [
            Ext.create('Ext.Button', {
                text: '<code>textAlign: left</code>',
                textAlign: 'left',
                width: 240,
                height: 50,
                style: 'margin: 5px'
            }), // create()
            
            Ext.create('Ext.Button', {
                text: '<code>textAlign: center</code> (default)',
                textAlign: 'center',
                width: 240,
                height: 50
            }), // create()
            
            Ext.create('Ext.Button', {
                text: '<code>textAlign: right</code>',
                textAlign: 'right',
                width: 240,
                height: 50,
                style: 'margin: 5px'
            }) // create()
        ], // items
        renderTo: Ext.getBody()
    }); // create()
}); // onReady()
