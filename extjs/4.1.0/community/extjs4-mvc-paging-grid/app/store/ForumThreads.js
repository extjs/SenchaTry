Ext.define('ExtMVC.store.ForumThreads', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.ForumThread',
    autoLoad: true,
    remoteSort: true,
    proxy: {
        // load using script tags for cross domain, if the data in on the same domain as
        // this page, an HttpProxy would be better
        type: 'jsonp',
        url: 'http://www.sencha.com/forum/topics-browse-remote.php',
        reader: {
            root: 'topics',
            totalProperty: 'totalCount'
        },
        // sends single sort as multi parameter
        simpleSortMode: true
    },
    sorters: [{
        property: 'lastpost',
        direction: 'DESC'
    }]
});
