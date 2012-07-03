/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.draw.Component', {
        renderTo: Ext.getBody(),
        width: 200,
        height: 200,
        items: [{
            type: "image",
            src: "http://www.sencha.com/img/apple-touch-icon.png",
            width: 200,
            height: 200
        }]
    });
});
