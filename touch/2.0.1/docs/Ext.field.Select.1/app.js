Ext.application({
    launch: function() {
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'fieldset',
                title: 'Select',
                items: [{
                    xtype: 'selectfield',
                    label: 'Choose one',
                    options: [{
                        text: 'First Option',
                        value: 'first'
                    }, {
                        text: 'Second Option',
                        value: 'second'
                    }, {
                        text: 'Third Option',
                        value: 'third'
                    }]
                }]
            }]
        });
    }
});
