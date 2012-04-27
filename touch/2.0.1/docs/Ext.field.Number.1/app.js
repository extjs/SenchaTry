Ext.application({
    launch: function() {
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'fieldset',
                title: 'How old are you?',
                items: [{
                    xtype: 'numberfield',
                    label: 'Age',
                    minValue: 18,
                    maxValue: 150,
                    name: 'age'
                }]
            }]
        });
    }
});