Ext.onReady(function() {
    Ext.create('Ext.form.Panel', {
        title: 'Time Card',
        width: 300,
        bodyPadding: 10,
        renderTo: Ext.getBody(),
        items: [{
            xtype: 'timefield',
            name: 'in',
            fieldLabel: 'Time In',
            minValue: '6:00 AM',
            maxValue: '8:00 PM',
            increment: 30,
            anchor: '100%'
        }, {
            xtype: 'timefield',
            name: 'out',
            fieldLabel: 'Time Out',
            minValue: '6:00 AM',
            maxValue: '8:00 PM',
            increment: 30,
            anchor: '100%'
        }]
    });
});