Ext.onReady(function () {
    Ext.create('Ext.form.Panel', {
        title: 'Field with Label',
        width: 400,
        bodyPadding: 10,
        renderTo: Ext.getBody(),
        layout: {
            type: 'hbox',
            align: 'middle'
        },
        items: [{
            xtype: 'textfield',
            hideLabel: true,
            flex: 1
        }, {
            xtype: 'label',
            forId: 'myFieldId',
            text: 'My Awesome Field',
            margins: '0 0 0 10'
        }]
    });
});
