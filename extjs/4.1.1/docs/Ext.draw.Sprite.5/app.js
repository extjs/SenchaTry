/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.draw.Component', {
        renderTo: Ext.getBody(),
        width: 200,
        height: 200,
        items: [{
            type: "text",
            text: "Hello, Sprite!",
            fill: "green",
            font: "18px monospace"
        }]
    });
});
