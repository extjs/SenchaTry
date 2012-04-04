Ext.application({
    launch: function () {
        var logo = Ext.create('Ext.Img', {
            src: 'http://www.sencha.com/img/sencha-large.png',
            id: 'logo',
            mode: 'element'
        }); // create()
        
        Ext.create('Ext.Panel', {
            fullscreen: true,
            items: [
                {
                    xtype: 'titlebar',
                    title: logo.getSrc(),
                    ui: 'light'
                },
                logo
            ] // items
        }); // create()
    } // launch
}); // application()
