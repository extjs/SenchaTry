/*global Ext:false */
Ext.application({
    launch: function () {
        var actionSheet = Ext.create('Ext.ActionSheet', {
            hidden: true,
            ui: 'light',
            items: [{
                ui: 'plain',
                style: 'color: #fff; height: 150px;',
                text: 'This dialog will close in 4 seconds…'
            }] // items
        }); // create()
        
        Ext.create('Ext.Container', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                items: [{
                    text: 'Launch self-closing ActionSheet',
                    handler: function () {
                        actionSheet.show();
                        setTimeout(function () {
                            actionSheet.hide();
                        }, 4000 /* ms */);
                    } // handler
                }] // items (toolbar)
            }] // items (container)
        }); // create()
        
        Ext.Viewport.add(actionSheet);
    } // launch
}); // application()
