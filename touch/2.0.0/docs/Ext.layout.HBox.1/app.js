/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.Container', {
            fullscreen: true,
            layout: 'hbox',
            items: [{
                html: 'message list',
                style: 'background-color: #5E99CC;',
                flex: 1
            }, {
                html: 'message preview',
                style: 'background-color: #759E60;',
                flex: 2
            }]
        });
    } // launch
}); // application()
