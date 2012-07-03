/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.TabPanel', {
        plain: true,
        items: [{
            title: '<code>plain: true</code>',
            html: 'The quick brown fox jumps over the lazy dog'
        }], // items
        height: 100,
        padding: 10,
        renderTo: Ext.getBody()
    }); // create()
    
    Ext.create('Ext.TabPanel', {
        plain: false,
        items: [{
            title: '<code>plain: false</code>',
            html: 'The quick brown fox jumps over the lazy dog'
        }], // items
        height: 100,
        padding: 10,
        renderTo: Ext.getBody()
    }); // create()
}); // onReady()
