/*global Ext:false */
Ext.application({
    launch: function () {
        var button = Ext.create('Ext.Button', {
            text: 'Button',
            id: 'rightButton'
        });

        Ext.create('Ext.Container', {
            fullscreen: true,
            items: [{
                docked: 'top',
                xtype: 'titlebar',
                items: [
                button]
            }]
        });

        Ext.create('Ext.Panel', {
            html: 'Floating Panel',
            left: 0,
            padding: 10
        }).showBy(button);
    } // launch
}); // application()
