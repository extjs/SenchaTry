Ext.application({
    launch: function () {
        var actionSheet = Ext.create('Ext.ActionSheet', {
            defaults: {
                handler: function (btn, evt) {
                    actionSheet.hide();
                } // handler
            }, // defaults
            items: [{
                xtype: 'titlebar',
                title: 'What are we doing?',
                ui: 'light'
            }, {
                text: 'Rock'
            }, {
                text: 'Paper'
            }, {
                text: 'Scissors'
            }] // items
        }); // create()
        
        Ext.create('Ext.Container', {
            fullscreen: true,
            items: [{
                xtype: 'titlebar',
                items: [{
                    xtype: 'button',
                    text: 'Show ActionSheet',
                    ui: 'confirm',
                    handler: function () {
                        actionSheet.show();
                    } // handler
                }] // items
            },
            actionSheet] // items
        }); // create()
    } // launch
}); // application()
