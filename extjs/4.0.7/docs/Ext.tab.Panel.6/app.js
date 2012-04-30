Ext.onReady(function () {
    var tabs = Ext.create('Ext.tab.Panel', {
        items: [{
            id: 'my-tab',
            title: 'Tab 1',
            html: 'A simple tab'
        }, {
            title: 'Tab 2',
            html: 'Another one'
        }],
        renderTo: Ext.getBody()
    });

    var tab = Ext.getCmp('my-tab');

    Ext.create('Ext.button.Button', {
        renderTo: Ext.getBody(),
        text: 'Select the first tab',
        scope: this,
        handler: function () {
            tabs.setActiveTab(tab);
        }
    });

    Ext.create('Ext.button.Button', {
        text: 'Select the second tab',
        scope: this,
        handler: function () {
            tabs.setActiveTab(1);
        },
        renderTo: Ext.getBody()
    });
});
