Ext.application({
    launch: function() {
        Ext.create('Ext.List', {
            fullscreen: true,
            itemTpl: '{title}',
            data: [{
                title: 'Item 1'
            }, {
                title: 'Item 2'
            }, {
                title: 'Item 3'
            }, {
                title: 'Item 4'
            }]
        });
    }
});
