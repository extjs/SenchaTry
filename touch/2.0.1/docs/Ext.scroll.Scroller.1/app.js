Ext.application({
    launch: function() {
        var container = Ext.create('Ext.Container', {
            fullscreen: true,
            html: 'This container is scrollable!',
            scrollable: {
                direction: 'vertical'
            }
        });
    }
});