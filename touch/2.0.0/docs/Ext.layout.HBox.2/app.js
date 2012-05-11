/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.Container', {
            fullscreen: true,
            layout: 'hbox',
            items: [{
                html: 'Left item',
                style: 'background-color: #759E60;',
                flex: 1
            }, {
                html: 'Center item',
                width: 100
            }, {
                html: 'Right item',
                style: 'background-color: #5E99CC;',
                flex: 1
            }]
        });
    } // launch
}); // application()
