/*global Ext:false */
Ext.onReady(function() {
    Ext.define('Ext.ux.CustomTrigger', {
        extend: 'Ext.form.field.Trigger',
        alias: 'widget.customtrigger',

        // override onTriggerClick
        onTriggerClick: function() {
            Ext.Msg.alert('Status', 'You clicked my trigger!');
        }
    });

    Ext.create('Ext.form.FormPanel', {
        title: 'Form with TriggerField',
        bodyPadding: 5,
        width: 350,
        renderTo: Ext.getBody(),
        items: [{
            xtype: 'customtrigger',
            fieldLabel: 'Sample Trigger',
            emptyText: 'click the trigger'
        }]
    });
});
