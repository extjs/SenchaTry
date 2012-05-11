/*global Ext:false */
Ext.application({
    launch: function() {
        Ext.Viewport.add({
            xtype: 'togglefield',
            name: 'awesome',
            label: 'Are you awesome?',
            labelWidth: '40%'
        });
    }
});
