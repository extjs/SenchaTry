Ext.application({
    launch: function () {
        var otherOptions = [{
            text: 'Tony',
            value: 5
        }, {
            text: 'Angela',
            value: 6
        }, {
            text: 'Samantha',
            value: 7
        }, {
            text: 'Jonathan',
            value: 8
        }, {
            text: 'Mona',
            value: 9
        }];
        
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    xtype: 'button',
                    text: 'change options',
                    handler: function () {
                        this.up('formpanel').down('selectfield').setOptions(otherOptions);
                    } // handler
                }] // items
            }, {
                xtype: 'fieldset',
                items: [{
                    xtype: 'selectfield',
                    label: 'options:',
                    name: 'mySelect',
                    options: [{
                        text: 'First',
                        value: 0
                    }, {
                        text: 'Second',
                        value: 1
                    }, {
                        text: 'Third',
                        value: 14
                    }], // options
                    listeners: {
                        change: function (select, newValue, oldValue) {
                            if (oldValue) {
                                var debug = Ext.String.format('<p><b>newValue:</b> {0}</p><p><b>oldValue:</b> {1}</p>',
                                                Ext.JSON.encode(newValue.data),
                                                Ext.JSON.encode(oldValue.data));
                                Ext.Msg.alert('selectfield change dispatched:', debug);
                            } else {
                                alert('oldValue is undefined');
                            }
                        } // change
                    } // listeners
                }] // items (fieldset)
            }] // items (formpanel)
        }); // create()
    } // launch
}); // application()
