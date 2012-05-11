/*global Ext:false */
Ext.onReady(function() {
    Ext.create('Ext.slider.Single', {
        width: 214,
        minValue: 0,
        maxValue: 100,
        useTips: true,
        renderTo: Ext.getBody()
    });
});
