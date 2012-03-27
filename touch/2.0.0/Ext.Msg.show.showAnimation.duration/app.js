Ext.application({
    launch: function () {
        Ext.create('Ext.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'titlebar',
                dock: 'top',
                items: [{
                    text: 'World\'s slowest alert',
                    handler: function () {
                        Ext.Msg.show({
                            title: 'Lorem Ipsum\'d',
                            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio erat, viverra pellentesque pulvinar eu, molestie eget mauris.',
                            showAnimation: {
                                type: 'slideIn',
                                duration: 5000
                            } // showAnimation
                        }); // show()
                    } // handler
                }] // items
            }] // items
        }); // create()
    } // launch
}); // application()
