/*global Ext:false */
Ext.application({
    launch: function() {
        var myButton = Ext.Viewport.add({
            xtype: 'button',
            centered: true,
            text: 'Click me',

            listeners: {
                tap: {
                    single: true,
                    fn: function() {
                        alert("I will say this only once");
                    }
                }
            }
        });
    }
});
