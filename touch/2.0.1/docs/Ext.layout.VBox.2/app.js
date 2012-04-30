Ext.application({
    launch: function() {
        Ext.create('Ext.Container', {
            fullscreen: true,
            layout: 'vbox',
            items: [{
                html: 'Top item',
                style: 'background-color: #5E99CC;',
                flex: 1
            }, {
                html: 'Center item',
                height: 100
            }, {
                html: 'Bottom item',
                style: 'background-color: #759E60;',
                flex: 1
            }]
        });
    }
});
