Ext.application({
    launch: function() {
        var view = Ext.create('Ext.navigation.View', {
            fullscreen: true,
            items: [{
                title: 'Navigation View',
                html: 'This is the first item in the stack!'
            }]
        });
    }
});