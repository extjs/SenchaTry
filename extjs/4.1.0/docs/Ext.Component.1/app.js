Ext.onReady(function() {
    Ext.create('Ext.Component', {
        html: 'Hello world!',
        width: 300,
        height: 200,
        padding: 20,
        style: {
            color: '#FFFFFF',
            backgroundColor: '#000000'
        },
        renderTo: Ext.getBody()
    });
});
