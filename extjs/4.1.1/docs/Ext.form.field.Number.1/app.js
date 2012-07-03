/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.form.Panel', {
        title: 'On The Wall',
        width: 300,
        bodyPadding: 10,
        renderTo: Ext.getBody(),
        items: [{
            xtype: 'numberfield',
            anchor: '100%',
            name: 'bottles',
            fieldLabel: 'Bottles of Beer',
            value: 99,
            maxValue: 99,
            minValue: 0
        }],
        buttons: [{
            text: 'Take one down, pass it around',
            handler: function () {
                this.up('form').down('[name=bottles]').spinDown();
            }
        }]
    });
});
