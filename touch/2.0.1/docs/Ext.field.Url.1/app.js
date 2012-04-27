Ext.application({
    launch: function() {
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'fieldset',
                title: 'Add Bookmark',
                items: [{
                    xtype: 'urlfield',
                    label: 'Url',
                    name: 'url'
                }]
            }]
        });
    }
});