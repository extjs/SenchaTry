Ext.application({
    launch: function() {
        var picker = Ext.create('Ext.Picker', {
            doneButton: false,
            cancelButton: false,
            toolbar: {
                ui: 'light',
                title: 'My Picker!'
            },
            slots: [{
                name: 'limit_speed',
                title: 'Speed',
                data: [{
                    text: '50 KB/s',
                    value: 50
                }, {
                    text: '100 KB/s',
                    value: 100
                }, {
                    text: '200 KB/s',
                    value: 200
                }, {
                    text: '300 KB/s',
                    value: 300
                }]
            }]
        });
        Ext.Viewport.add(picker);
        picker.show();
    }
});