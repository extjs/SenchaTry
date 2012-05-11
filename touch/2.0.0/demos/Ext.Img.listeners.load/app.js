/*global Ext:false */
Ext.application({
    launch: function () {
        var logo = Ext.create('Ext.Img', {
            src: 'http://www.sencha.com/img/sencha-large.png',
            width: 372,
            height: 140,
            listeners: {
                load: function (img, evt) {
                    Ext.Msg.alert('Ext.Img loaded successfully');
                }, // load
                error: function (img, evt) {
                    Ext.Msg.alert('Ext.Img could not be loaded', img.getSrc());
                } // error
            } // listeners
        }); // create()
        
        Ext.create('Ext.Panel', {
            fullscreen: true,
            items: logo
        }); // create()
    } // launch
}); // application()
