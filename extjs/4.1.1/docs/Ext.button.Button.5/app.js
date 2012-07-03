/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.Button', {
        renderTo: Ext.getBody(),
        text: 'Click Me',
        enableToggle: true
    });
});
