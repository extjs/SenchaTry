/*global Ext:false */
Ext.application({
    launch: function () {
        var datePicker = Ext.create('Ext.picker.Date', {
            value: new Date()
        });
        Ext.Viewport.add(datePicker);
        datePicker.show();
    } // launch
}); // application()
