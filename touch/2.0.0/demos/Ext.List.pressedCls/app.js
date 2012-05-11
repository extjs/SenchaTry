/*global Ext:false */
Ext.application({
    launch: function () {
        var myList = Ext.create('Ext.List', {
            disableSelection: true,
            fullscreen: true,
            itemTpl: '{name}',
            pressedCls: 'myPressedCls',
            pressedDelay: 100, /* ms */
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
                    name: 'Green',
                    selectable: false
                }, {
                    name: 'Blue'
                }] // data
            } // store
        }); // create()
    } // launch
}); // application()
