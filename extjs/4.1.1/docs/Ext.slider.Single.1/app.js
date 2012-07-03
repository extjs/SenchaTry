/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.slider.Single', {
        width: 200,
        value: 50,
        increment: 10,
        minValue: 0,
        maxValue: 100,
        renderTo: Ext.getBody()
    });
});
