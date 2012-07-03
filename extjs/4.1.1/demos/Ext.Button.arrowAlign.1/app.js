/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.Container', {
        items:[
            Ext.create('Ext.Button', {
                arrowAlign: 'right',
                menu: [
                    {text: 'A wild submenu appears.'},
                    {text: 'It\'s super effective!'}
                ], // menu
                text: '<code>arrowAlign: right</code>'
            }), // create()
            
            Ext.create('Ext.Button', {
                arrowAlign: 'bottom',
                menu: [
                    {text: 'A wild submenu appears.'},
                    {text: 'It\'s super effective!'}
                ], // menu
                text: '<code>arrowAlign: bottom</code>'
            }) // create()
        ], // items
        renderTo: Ext.getBody()
    }); // create()
}); // onReady()
