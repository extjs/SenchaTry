Ext.onReady(function() {
    Ext.create('Ext.slider.Multi', {
        width: 200,
        values: [25, 50, 75],
        increment: 5,
        minValue: 0,
        maxValue: 100,

        // this defaults to true, setting to false allows the thumbs to pass each other
        constrainThumbs: false,
        renderTo: Ext.getBody()
    });
});