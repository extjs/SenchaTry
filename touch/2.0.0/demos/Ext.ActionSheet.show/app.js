Ext.application({
    launch: function () {
        var actionSheet = Ext.create('Ext.ActionSheet', {
            defaults: {
                handler: function (btn, evt) {
                    actionSheet.hide();
                } // handler
            }, // defaults
            items: [
                {
                    text: 'Ext JS'
                }, {
                    text: 'Sencha Touch'
                }, {
                    text: 'Sencha Animator'
                }, {
                    text: 'Sencha Designer'
                }, {
                    text: 'Sencha.io'
                }
            ] // items
        }); // create()
        
        Ext.create('Ext.Container', {
            fullscreen: true,
            items: [
                {
                    xtype: 'titlebar',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Show ActionSheet',
                            ui: 'confirm',
                            handler: function () {
                                actionSheet.show();
                            } // handler
                        }
                    ] // items
                },
                actionSheet
            ] // items
        }); // create()
    } // launch
}); // application()
