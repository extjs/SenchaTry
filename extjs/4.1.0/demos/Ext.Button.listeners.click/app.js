Ext.onReady(function () {
    Ext.create('Ext.Button', {
        text: 'Click to launch MessageBox',
        listeners: {
            click: function () {
                Ext.Msg.alert('You clicked the button');
            } // click
        }, // listeners
        renderTo: Ext.getBody()
    }); // create()
}); // onReady()
