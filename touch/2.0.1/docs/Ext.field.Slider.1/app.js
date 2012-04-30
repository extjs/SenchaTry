Ext.application({
    launch: function() {
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'sliderfield',
                label: 'Percentage',
                value: 50,
                minValue: 0,
                maxValue: 100
            }]
        });
    }
});
