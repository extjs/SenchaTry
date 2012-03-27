Ext.application({
    launch: function () {
        Ext.create('Ext.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'titlebar',
                dock: 'top',
                items: [{
                    text: 'slideIn/slideOut',
                    handler: function () {
                        Ext.Msg.show({
                            title:'slide animations',
                            showAnimation: 'slideIn',
                            hideAnimation: 'slideOut'
                        }); // show()
                    } // handler
                }, {
                    text: 'fadeIn/fadeOut',
                    handler: function () {
                        Ext.Msg.show({
                            title:'fade animations',
                            showAnimation: 'fadeIn',
                            hideAnimation: 'fadeOut'
                        }); // show()
                    } // handler
                }] // items
            }] // items
        }); // create()
    } // launch
}); // application()
