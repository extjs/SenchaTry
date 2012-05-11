/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.Container', {
            fullscreen: true,
            layout: 'vbox',
            items: [{
                html: 'Awesome banner',
                style: 'background-color: #759E60;',
                flex: 1
            }, {
                html: 'Some wonderful information',
                style: 'background-color: #5E99CC;',
                flex: 2
            }]
        });
    } // launch
}); // application()
