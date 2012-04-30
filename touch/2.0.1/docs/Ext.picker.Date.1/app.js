Ext.application({
    launch: function() {
        var datePicker = Ext.create('Ext.picker.Date');
        Ext.Viewport.add(datePicker);
        datePicker.show();
    }
});
