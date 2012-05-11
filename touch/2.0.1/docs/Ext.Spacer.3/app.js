/*global Ext:false */
Ext.application({
    launch: function() {
        Ext.create('Ext.Container', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Button One'
                }, {
                    xtype: 'spacer'
                }, {
                    xtype: 'button',
                    text: 'Button Two'
                }, {
                    xtype: 'spacer',
                    width: 20
                }, {
                    xtype: 'button',
                    text: 'Button Three'
                }]
            }]
        });
    }
});
