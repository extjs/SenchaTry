/*global Ext:false */
Ext.application({
    launch: function() {
        var myButton = Ext.Viewport.add({
            xtype: 'button',
            centered: true,
            text: 'Click me'
        });

        var panel = Ext.create('Ext.Panel', {
            html: 'Panel HTML'
        });

        myButton.on({
            tap: {
                scope: panel,
                fn: function() {
                    alert("Running in Panel's scope");
                    alert(this.getHtml());
                }
            }
        });
    }
});
