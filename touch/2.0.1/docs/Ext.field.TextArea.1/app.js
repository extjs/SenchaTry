Ext.application({
    launch: function() {
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'fieldset',
                title: 'About you',
                items: [{
                    xtype: 'textfield',
                    label: 'Name',
                    name: 'name'
                }, {
                    xtype: 'textareafield',
                    label: 'Bio',
                    maxRows: 4,
                    name: 'bio'
                }]
            }]
        });
    }
});
