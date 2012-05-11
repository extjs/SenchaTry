/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.Container', {
        padding: 20,
        items: [
            Ext.create('Ext.Button', {
                text: 'small (default)',
                scale: 'small'
            }), // create()
            
            Ext.create('Ext.Button', {
                text: 'medium',
                scale: 'medium'
            }), // create()
            
            Ext.create('Ext.Button', {
                text: 'large',
                scale: 'large'
            }) // create()
        ],
        renderTo: Ext.getBody()
    }); // create()
}); // onReady()
