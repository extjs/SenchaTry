Ext.onReady(function() {
    Ext.create('Ext.form.Panel', {
        renderTo: Ext.getBody(),
        width: 300,
        bodyPadding: 10,
        title: 'Dates',
        items: [{
            xtype: 'datefield',
            anchor: '100%',
            fieldLabel: 'Date',
            name: 'date',
            // The value matches the format; will be parsed and displayed using that format.
            format: 'm d Y',
            value: '2 4 1978'
        }, {
            xtype: 'datefield',
            anchor: '100%',
            fieldLabel: 'Date',
            name: 'date',
            // The value does not match the format, but does match an altFormat; will be parsed
            // using the altFormat and displayed using the format.
            format: 'm d Y',
            altFormats: 'm,d,Y|m.d.Y',
            value: '2.4.1978'
        }]
    });
});
