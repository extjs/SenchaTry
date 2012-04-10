Ext.onReady(function () {
    // Create a draw component
    var drawComponent = Ext.create('Ext.draw.Component', {
        viewBox: false
    });

    // Create a window to place the draw component in
    Ext.create('Ext.Window', {
        width: 220,
        height: 230,
        layout: 'fit',
        items: [drawComponent]
    }).show();

    // Add a circle sprite
    var myCircle = drawComponent.surface.add({
        type: 'circle',
        x: 100,
        y: 100,
        radius: 100,
        fill: '#cc5'
    });

    // Now do stuff with the sprite, like changing its properties:
    myCircle.setAttributes({
        fill: '#ccc'
    }, true);

    // or animate an attribute on the sprite
    myCircle.animate({
        to: {
            fill: '#555'
        },
        duration: 2000
    });

    // Add a mouseup listener to the sprite
    myCircle.addListener('mouseup', function () {
        alert('mouse upped!');
    });
});
