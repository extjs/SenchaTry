Ext.onReady(function() {
    Ext.create('Ext.tab.Panel', {
        width: 300,
        height: 200,
        activeTab: 0,
        bodyPadding: 10,
        tabPosition: 'bottom',
        items: [{
            title: 'Tab 1',
            html: 'A simple tab'
        }, {
            title: 'Tab 2',
            html: 'Another one'
        }],
        renderTo: Ext.getBody()
    });
});