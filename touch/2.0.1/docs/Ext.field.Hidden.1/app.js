Ext.application({
    launch: function() {
        var form = Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'fieldset',
                title: 'Enter your name',
                items: [{
                    xtype: 'hiddenfield',
                    name: 'userId',
                    value: 123
                }, {
                    xtype: 'checkboxfield',
                    label: 'Enable notifications',
                    name: 'notifications'
                }]
            }]
        });
    }
});