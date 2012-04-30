Ext.application({
    launch: function() {
        var data = {
            text: 'Groceries',
            items: [{
                text: 'Drinks',
                items: [{
                    text: 'Water',
                    items: [{
                        text: 'Sparkling',
                        leaf: true
                    }, {
                        text: 'Still',
                        leaf: true
                    }]
                }, {
                    text: 'Coffee',
                    leaf: true
                }, {
                    text: 'Espresso',
                    leaf: true
                }, {
                    text: 'Redbull',
                    leaf: true
                }, {
                    text: 'Coke',
                    leaf: true
                }, {
                    text: 'Diet Coke',
                    leaf: true
                }]
            }, {
                text: 'Fruit',
                items: [{
                    text: 'Bananas',
                    leaf: true
                }, {
                    text: 'Lemon',
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
        };

        Ext.define('ListItem', {
            extend: 'Ext.data.Model',
            config: {
                fields: [{
                    name: 'text',
                    type: 'string'
                }]
            }
        });

        var store = Ext.create('Ext.data.TreeStore', {
            model: 'ListItem',
            defaultRootProperty: 'items',
            root: data
        });

        var nestedList = Ext.create('Ext.NestedList', {
            fullscreen: true,
            title: 'Groceries',
            displayField: 'text',
            store: store
        });
    }
});
