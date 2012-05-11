/*global Ext:false */
Ext.onReady(function() {
    var toolbar = Ext.create('Ext.toolbar.Toolbar', {
        renderTo: document.body,
        width: 700,
        items: [{
            text: 'Example Button'
        }]
    });

    var addedItems = [];

    Ext.create('Ext.toolbar.Toolbar', {
        renderTo: document.body,
        width: 700,
        margin: '5 0 0 0',
        items: [{
            text: 'Add a button',
            scope: this,
            handler: function() {
                var text = prompt('Please enter the text for your button:');
                addedItems.push(toolbar.add({
                    text: text
                }));
            }
        }, {
            text: 'Add a text item',
            scope: this,
            handler: function() {
                var text = prompt('Please enter the text for your item:');
                addedItems.push(toolbar.add(text));
            }
        }, {
            text: 'Add a toolbar separator',
            scope: this,
            handler: function() {
                addedItems.push(toolbar.add('-'));
            }
        }, {
            text: 'Add a toolbar spacer',
            scope: this,
            handler: function() {
                addedItems.push(toolbar.add('->'));
            }
        }, '->',
        {
            text: 'Remove last inserted item',
            scope: this,
            handler: function() {
                if (addedItems.length) {
                    toolbar.remove(addedItems.pop());
                } else if (toolbar.items.length) {
                    toolbar.remove(toolbar.items.last());
                } else {
                    alert('No items in the toolbar');
                }
            }
        }, {
            text: 'Remove all items',
            scope: this,
            handler: function() {
                toolbar.removeAll();
            }
        }]
    });
});
