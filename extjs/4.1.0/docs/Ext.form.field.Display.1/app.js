Ext.onReady(function() {
    Ext.create('Ext.form.Panel', {
        renderTo: Ext.getBody(),
        width: 175,
        height: 120,
        bodyPadding: 10,
        title: 'Final Score',
        items: [{
            xtype: 'displayfield',
            fieldLabel: 'Home',
            name: 'home_score',
            value: '10'
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Visitor',
            name: 'visitor_score',
            value: '11'
        }],
        buttons: [{
            text: 'Update'
        }]
    });
});
