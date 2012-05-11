/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.picker.Time', {
        width: 60,
        minValue: Ext.Date.parse('04:30:00 AM', 'h:i:s A'),
        maxValue: Ext.Date.parse('08:00:00 AM', 'h:i:s A'),
        renderTo: Ext.getBody()
    });
});
