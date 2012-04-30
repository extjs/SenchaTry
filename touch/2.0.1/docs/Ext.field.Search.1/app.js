Ext.application({
    launch: function() {
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'fieldset',
                title: 'Search',
                items: [{
                    xtype: 'searchfield',
                    label: 'Query',
                    name: 'query'
                }]
            }]
        });
    }
});
