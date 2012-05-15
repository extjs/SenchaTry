/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.Button', {
        text: 'Click to launch MessageBox',
        handler: function () {
            Ext.Msg.alert('You clicked the button');
        }, // handler
        renderTo: Ext.getBody()
    }); // create()
}); // onReady()
