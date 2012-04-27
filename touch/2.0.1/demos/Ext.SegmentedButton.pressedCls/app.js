Ext.application({
    launch: function () {
        Ext.create('Ext.Panel', {
            fullscreen: true,
            styleHtmlContent: true,
            items: [{
                xtype: 'segmentedbutton',
                pressedCls: 'customPressedCls',
                allowMultiple: true,
                items: [{
                    pressed: true,
                    text: 'Red'
                }, {
                    text: 'Orange'
                }, {
                    text: 'Yellow'
                }, {
                    text: 'Green'
                }, {
                    text: 'Blue'
                }] // items (segmentedbutton)
            }] // items (panel)
        }); // create()
    } // launch
}); // application()
