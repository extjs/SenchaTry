/*global Ext:false */
Ext.application({
    launch: function () {
        var list = Ext.create('Ext.List', {
            fullscreen: true,
            disableSelection: true,
            store: {
                fields: ['name'],
                data: [{
                    name: 'Red'
                }, {
                    name: 'Orange'
                }, {
                    name: 'Yellow'
                }, {
                    name: 'Green'
                }, {
                    name: 'Blue'
                }] // data
            }, // store
            itemTpl: '{name}',
            items: [{
                xtype: 'titlebar',
                id: 'myTitleBar',
                title: 'disableSelection: true',
                items: [{
                    text: 'toggle disableSelection',
                    handler: function () {
                        var value = list.getDisableSelection();
                        list.setDisableSelection(!value);
                        Ext.getCmp('myTitleBar').setTitle('disableSelection: ' + (!value).toString());
                    } // handler
                }] // items
            }] // items
        }); // create()
    } // launch
}); // application()
