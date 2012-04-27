Ext.application({
    launch: function() {
        Ext.create('Ext.Panel', {
            html: 'My Panel',
            fullscreen: true,

            listeners: {
                painted: function() {
                    alert('I was painted to the screen');
                }
            }
        });
    }
});