Ext.application({
    launch: function() {
        Ext.application({
            name: 'Sencha',

            launch: function() {
                Ext.create("Ext.tab.Panel", {
                    fullscreen: true,
                    tabBarPosition: 'bottom',

                    items: [{
                        xtype: 'nestedlist',
                        title: 'Blog',
                        iconCls: 'star',
                        displayField: 'title',

                        store: {
                            type: 'tree',

                            fields: ['title', 'link', 'author', 'contentSnippet', 'content',
                            {
                                name: 'leaf',
                                defaultValue: true
                            }],

                            root: {
                                leaf: false
                            },

                            proxy: {
                                type: 'jsonp',
                                url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
                                reader: {
                                    type: 'json',
                                    rootProperty: 'responseData.feed.entries'
                                }
                            }
                        },

                        detailCard: {
                            xtype: 'panel',
                            scrollable: true,
                            styleHtmlContent: true
                        },

                        listeners: {
                            itemtap: function(nestedList, list, index, element, post) {
                                this.getDetailCard().setHtml(post.get('content'));
                            }
                        }
                    }]
                });
            }
        });
    }
});