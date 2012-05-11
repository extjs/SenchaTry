/*global Ext:false */
Ext.application({
    launch: function() {
        Ext.Viewport.add({
            xtype: 'togglefield',
            name: 'awesome',
            value: 1,
            label: 'Are you awesome?',
            labelWidth: '40%'
        });
    }
});
