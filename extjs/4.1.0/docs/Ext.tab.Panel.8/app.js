/*global Ext:false */
Ext.onReady(function() {
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
        text: 'New tab',
        scope: this,
        handler: function() {
            var tab = tabs.add({
                // we use the tabs.items property to get the length of current items/tabs
                title: 'Tab ' + (tabs.items.length + 1),
                html: 'Another one'
            });

            tabs.setActiveTab(tab);
        },
        renderTo: Ext.getBody()
    });
});
