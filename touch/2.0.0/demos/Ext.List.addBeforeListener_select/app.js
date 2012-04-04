Ext.application({
    launch: function () {
        var myList = Ext.create('Ext.List', {
            fullscreen: true,
            items: [{
                xtype: 'titlebar',
                docked: 'top',
                ui: 'neutral'
            }], // items
            store: {
                fields: ['name', 'selectable'],
                data: [{
                    name: 'Red'
                }, {
                    name: 'Orange'
                }, {
                    name: 'Yellow',
                    selectable: true
                }, {
                    name: 'Green (unselectable)',
                    selectable: false
                }, {
                    name: 'Blue'
                }] // data
            }, // store
            itemTpl: '{name}',
            listeners: {
                select: function (list, model) {
                    list.down('titlebar').setTitle(model.get('name'));
                } // select
            } // listeners
        }); // create()
        
        myList.addBeforeListener('select', function (list, model) {
            if (model.get('selectable') === false) {
                list.down('titlebar').setTitle('');
                return false;
            }
        }); // addBeforeListener()
    } // launch
}); // application()
