/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    xtype: 'segmentedbutton',
                    allowDepress: false,
                    items: [{
                        text: 'Red',
                        pressed: true
                    }, {
                        text: 'Orange'
                    }, {
                        text: 'Yellow'
                    }, {
                        text: 'Green'
                    }, {
                        text: 'Blue'
                    }] // items
                }] // items
            }] // items 
        }); // create(panel)
    } // launch
}); // application()
