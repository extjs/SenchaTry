/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.panel.Panel', {
        width: 200,
        height: 200,
        renderTo: document.body,
        title: 'A Panel',
        tools: [{
            type: 'help',
            handler: function () {
                // show help here
            }
        }, {
            itemId: 'refresh',
            type: 'refresh',
            hidden: true,
            handler: function () {
                // do refresh
            }
        }, {
            type: 'search',
            handler: function (event, target, owner, tool) {
                // do search
                owner.child('#refresh').show();
            }
        }]
    });
});
