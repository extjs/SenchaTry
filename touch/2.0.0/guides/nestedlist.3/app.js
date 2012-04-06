Ext.application({
    launch: function () {
        Ext.define('ListItem', {
            extend: 'Ext.data.Model',
            config: {
                fields: ['text']
            }
        });

        var treeStore = Ext.create('Ext.data.TreeStore', {
            model: 'ListItem',
            defaultRootProperty: 'items',
            root: {
                items: [{
                    text: 'Drinks',
                    items: [{
                        text: 'Water',
                        items: [{
                            text: 'Still',
                            leaf: true
                        }, {
                            text: 'Sparkling',
                            leaf: true
                        }]
                    }, {
                        text: 'Soda',
                        leaf: true
                    }]
                }, {
                    text: 'Snacks',
                    items: [{
                        text: 'Nuts',
                        leaf: true
                    }, {
                        text: 'Pretzels',
                        leaf: true
                    }, {
                        text: 'Wasabi Peas',
                        leaf: true
                    }]
                }]
            }
        });

        Ext.create('Ext.NestedList', {
            fullscreen: true,
            store: treeStore,
            detailCard: {
                html: 'You are viewing the detail card!'
            },
            listeners: {
                leafitemtap: function (nestedList, list, index, target, record) {
                    var detailCard = nestedList.getDetailCard();
                    detailCard.setHtml('You selected: ' + record.get('text'));
                }
            }
        });
    } // launch
}); // application()
