Ext.application({
    launch: function() {
        // Create our container
        var container = Ext.create('Ext.Container', {
            html: 'My container!'
        });

        // Add the container to the Viewport
        Ext.Viewport.add(container);

        // Mask the container
        container.setMasked(true);
    }
});