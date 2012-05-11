/*global Ext:false */
Ext.onReady(function() {
    Ext.create('Ext.panel.Panel', {
        title: 'Choose a future date:',
        width: 200,
        bodyPadding: 10,
        renderTo: Ext.getBody(),
        items: [{
            xtype: 'datepicker',
            minDate: new Date(),
            handler: function(picker, date) {
                // do something with the selected date
            }
        }]
    });
});
