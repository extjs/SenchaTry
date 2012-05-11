/*global Ext:false */
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
                    var value = model.get('name');
                    if (model.get('selectable') === false) {
                        list.deselect(model);
                        return false;
                    }
                    this.down('titlebar').setTitle(value);
                } // select
            } // listeners
        }); // create()
    } // launch
}); // application()
