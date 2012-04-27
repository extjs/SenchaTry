Ext.onReady(function () {
    Ext.create('Ext.Button', {
        text: '<code>enableToggle: true</code>',
        enableToggle: true,
        handler: function () {
            this.setText('<code>pressed: ' + this.pressed + '</code>');
        }, // handler
        renderTo: Ext.getBody()
    }); // create()
}); // onReady()
