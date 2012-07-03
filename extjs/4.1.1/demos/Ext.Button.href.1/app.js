/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.Button', {
        href: 'http://sencha.com/',
        renderTo: Ext.getBody(),
        text: 'Go to Sencha.com'
    }); // create()
}); // onReady()
