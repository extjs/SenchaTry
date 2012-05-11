/*global Ext:false */
Ext.application({
    launch: function() {
        var spinner = Ext.create('Ext.field.Spinner', {
            label: 'Spinner Field',
            minValue: 0,
            maxValue: 100,
            increment: 2,
            cycle: true
        });
        Ext.Viewport.add({
            xtype: 'container',
            items: [spinner]
        });
    }
});
