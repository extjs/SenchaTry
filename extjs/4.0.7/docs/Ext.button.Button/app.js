Ext.onReady(function () {
    Ext.create('Ext.Button', {
        text: 'Click me',
        renderTo: Ext.getBody(),
        handler: function () {
            alert('You clicked the button!')
        }
    });
});
