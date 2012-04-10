Ext.onReady(function () {
    var tabs = Ext.create('Ext.tab.Panel', {
        items: [{
            title: 'Tab 1',
            html: 'A simple tab'
        }, {
            title: 'Tab 2',
            html: 'Another one'
        }],
        renderTo: Ext.getBody()
    });

    Ext.create('Ext.button.Button', {
        text: 'Get active tab',
        scope: this,
        handler: function () {
            var tab = tabs.getActiveTab();
            alert('Current tab: ' + tab.title);
        },
        renderTo: Ext.getBody()
    });
});
