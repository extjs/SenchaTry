Ext.application({
    launch: function () {
        var logo = Ext.create('Ext.Img', {
            src: 'http://www.sencha.com/img/sencha-large.png',
            mode: 'element',
            listeners: {
                tap: function (img, evt) {
                    Ext.Msg.alert('You clicked the image');
                } // tap
            } // listeners
        }); // create()
        
        Ext.create('Ext.Panel', {
            fullscreen: true,
            items: logo
        }); // create()
    } // launch
}); // application()
