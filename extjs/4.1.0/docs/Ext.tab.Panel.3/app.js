Ext.onReady(function() {
    var tabs = Ext.create('Ext.tab.Panel', {
        width: 400,
        height: 400,
        renderTo: document.body,
        items: [{
            title: 'Home',
            html: 'Home',
            itemId: 'home'
        }, {
            title: 'Users',
            html: 'Users',
            itemId: 'users',
            hidden: true
        }, {
            title: 'Tickets',
            html: 'Tickets',
            itemId: 'tickets'
        }]
    });

    setTimeout(function() {
        tabs.child('#home').tab.hide();
        var users = tabs.child('#users');
        users.tab.show();
        tabs.setActiveTab(users);
    }, 1000);
});
