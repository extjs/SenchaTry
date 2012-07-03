/*global Ext:false */
Ext.onReady(function () {
    var drawComponent = Ext.create('Ext.draw.Component', {
        width: 800,
        height: 600,
        renderTo: document.body
    }),
        surface = drawComponent.surface;

    surface.add([{
        type: 'circle',
        radius: 10,
        fill: '#f00',
        x: 10,
        y: 10,
        group: 'circles'
    }, {
        type: 'circle',
        radius: 10,
        fill: '#0f0',
        x: 50,
        y: 50,
        group: 'circles'
    }, {
        type: 'circle',
        radius: 10,
        fill: '#00f',
        x: 100,
        y: 100,
        group: 'circles'
    }, {
        type: 'rect',
        width: 20,
        height: 20,
        fill: '#f00',
        x: 10,
        y: 10,
        group: 'rectangles'
    }, {
        type: 'rect',
        width: 20,
        height: 20,
        fill: '#0f0',
        x: 50,
        y: 50,
        group: 'rectangles'
    }, {
        type: 'rect',
        width: 20,
        height: 20,
        fill: '#00f',
        x: 100,
        y: 100,
        group: 'rectangles'
    }]);

    // Get references to my groups
    circles = surface.getGroup('circles');
    rectangles = surface.getGroup('rectangles');

    // Animate the circles down
    circles.animate({
        duration: 1000,
        to: {
            translate: {
                y: 200
            }
        }
    });

    // Animate the rectangles across
    rectangles.animate({
        duration: 1000,
        to: {
            translate: {
                x: 200
            }
        }
    });
});
