Ext.onReady(function () {
    Ext.create('Ext.form.Panel', {
        title: 'FieldContainer Example',
        width: 550,
        bodyPadding: 10,

        items: [{
            xtype: 'fieldcontainer',
            fieldLabel: 'Last Three Jobs',
            labelWidth: 100,

            // The body area will contain three text fields, arranged
            // horizontally, separated by draggable splitters.
            layout: 'hbox',
            items: [{
                xtype: 'textfield',
                flex: 1
            }, {
                xtype: 'splitter'
            }, {
                xtype: 'textfield',
                flex: 1
            }, {
                xtype: 'splitter'
            }, {
                xtype: 'textfield',
                flex: 1
            }]
        }],
        renderTo: Ext.getBody()
    });
});
