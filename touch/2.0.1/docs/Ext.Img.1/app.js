Ext.application({
    launch: function() {
        var img = Ext.create('Ext.Img', {
            src: 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png',
            height: 64,
            width: 64
        });
        Ext.Viewport.add(img);
    }
});
