Ext.application({
    launch: function() {
        var datePicker = Ext.create('Ext.picker.Date', {
            useTitles: false
        });
        Ext.Viewport.add(datePicker);
        datePicker.show();
    }
});