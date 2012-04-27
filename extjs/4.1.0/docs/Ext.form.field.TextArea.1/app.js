Ext.onReady(function() {
    Ext.create('Ext.form.FormPanel', {
        title: 'Sample TextArea',
        width: 400,
        bodyPadding: 10,
        renderTo: Ext.getBody(),
        items: [{
            xtype: 'textareafield',
            grow: true,
            name: 'message',
            fieldLabel: 'Message',
            anchor: '100%'
        }]
    });
});