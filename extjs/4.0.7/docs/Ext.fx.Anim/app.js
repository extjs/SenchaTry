Ext.onReady(function () {
    var myComponent = Ext.create('Ext.Component', {
        renderTo: document.body,
        width: 200,
        height: 200,
        style: 'border: 1px solid red;'
    });

    Ext.create('Ext.fx.Anim', {
        target: myComponent,
        duration: 1000,
        from: {
            width: 400 // starting width 400
        },
        to: {
            width: 300, // end width 300
            height: 300 // end height 300
        }
    });
});
