Ext.application({
    launch: function () {
        var picker = Ext.create('Ext.Picker', {
            useTitles: true,
            slots: [{
                name: 'months',
                title: 'Months',
                data: [{
                    text: 'January',
                    value: 0
                }, {
                    text: 'February',
                    value: 1
                }, {
                    text: 'March',
                    value: 2
                }, {
                    text: 'April',
                    value: 3
                }, {
                    text: 'May',
                    value: 4
                }, {
                    text: 'June',
                    value: 5
                }, {
                    text: 'July',
                    value: 6
                }, {
                    text: 'August',
                    value: 7
                }, {
                    text: 'September',
                    value: 8
                }, {
                    text: 'October',
                    value: 9
                }, {
                    text: 'November',
                    value: 10
                }, {
                    text: 'December',
                    value: 11
                }] // data
            }] // slots
        }); // create()
        
        Ext.create('Ext.Container', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                items: [{
                    text: 'useTitles = true',
                    handler: function () {
                        picker.setUseTitles(true);
                        picker.show();
                    } // handler
                }, {
                    text: 'useTitles = false',
                    handler: function () {
                        picker.setUseTitles(false);
                        picker.show();
                    } // handler
                }] // items (toolbar)
            }] // items (container)
        }); // create()
        
        Ext.Viewport.add(picker);
    } // launch
}); // application()
