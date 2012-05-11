/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.Button', {
        href: 'http://sencha.com/',
        renderTo: Ext.getBody(),
        target: '_top',
        text: 'Go to Sencha.com (<code>target=\'_top\'</code>)'
    }); // create()
}); // onReady()
