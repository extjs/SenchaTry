Ext.application({
    launch: function () {
        Ext.create('Ext.Panel', {
            fullscreen: true,
            layout: 'hbox',
            items: [{
                xtype: 'image',
                src: 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png',
                flex: 1
            }, {
                xtype: 'panel',
                flex: 2,
                html: 'Sencha Inc.<br/>1700 Seaport Boulevard Suite 120, Redwood City, CA'
            }]
        });
    } // launch
}); // application()
