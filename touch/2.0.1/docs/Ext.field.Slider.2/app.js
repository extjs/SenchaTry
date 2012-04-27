Ext.application({
    launch: function() {
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'sliderfield',
                label: 'Waist Measurement',
                minValue: 24,
                maxValue: 60,
                increment: 2,
                value: 32
            }]
        });
    }
});