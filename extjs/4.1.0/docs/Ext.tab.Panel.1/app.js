Ext.onReady(function() {
    Ext.create('Ext.tab.Panel', {
        width: 400,
        height: 400,
        renderTo: document.body,
        items: [{
            title: 'Foo'
        }, {
            title: 'Bar',
            tabConfig: {
                title: 'Custom Title',
                tooltip: 'A button tooltip'
            }
        }]
    });
});
