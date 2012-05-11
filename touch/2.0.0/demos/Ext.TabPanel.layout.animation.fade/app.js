/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.TabPanel', {
            fullscreen: true,
            layout: {
                type: 'card',
                animation: 'fade'
            }, // layout
            items: [{
                title: 'Red',
                style: 'background-color:#f00;'
            }, {
                title: 'Orange',
                style: 'background-color:#ffb600;'
            }, {
                title: 'Yellow',
                style: 'background-color:#ff0;'
            }, {
                title: 'Green',
                style: 'background-color:#80ff4d;'
            }, {
                title: 'Blue',
                style: 'background-color:#009dff;'
            }] // items
        }); // create()
    } // launch
}); // application()
