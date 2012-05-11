/*global Ext:false */
Ext.application({
    launch: function () {
        var doSomething = function () {
                alert('handler called');
            };

        var myButton = Ext.Viewport.add({
            xtype: 'button',
            text: 'My Button',
            centered: true,
            listeners: {
                tap: doSomething
            }
        });

        Ext.defer(function () {
            myButton.un('tap', doSomething);
        }, 3000);
    } // launch
}); // application()
