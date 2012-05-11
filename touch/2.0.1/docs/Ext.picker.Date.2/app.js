/*global Ext:false */
Ext.application({
    launch: function() {
        var datePicker = Ext.create('Ext.picker.Date', {
            yearFrom: 2000,
            yearTo: 2015
        });
        Ext.Viewport.add(datePicker);
        datePicker.show();
    }
});
