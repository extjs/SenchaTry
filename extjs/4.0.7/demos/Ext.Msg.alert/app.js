/*global Ext:false */
Ext.onReady(function () {
    var numClicks = 0;
    Ext.create('Ext.Button', {
        text: 'Click to relaunch alert',
        handler: function () {
            Ext.Msg.alert('Status title', 'Alert was relaunched ' + (++numClicks) + " times.");
        },
        renderTo: Ext.getBody()
    }); // create()
    Ext.Msg.alert('Status title', 'I am an Ext.Msg.alert()');
}); // onReady()
