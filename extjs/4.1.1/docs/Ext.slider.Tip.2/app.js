/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.slider.Single', {
        width: 214,
        minValue: 0,
        maxValue: 100,
        useTips: true,
        tipText: function (thumb) {
            return Ext.String.format('**{0}% complete**', thumb.value);
        },
        renderTo: Ext.getBody()
    });
});
