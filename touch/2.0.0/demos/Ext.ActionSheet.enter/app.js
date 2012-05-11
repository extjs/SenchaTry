/*global Ext:false */
Ext.application({
    launch: function () {
        var actionSheet = Ext.create('Ext.ActionSheet', {
            enter: 'top',
            exit: 'right',
            hidden: true,
            defaults: {
                listeners: {
                    tap: function () {
                        actionSheet.hide();
                    } // tap
                } // listeners
            }, // defaults
            items: [{
                text: 'Cancel',
                handler: function () {
                    /* cancel handler */
                } // handler
            }, {
                text: 'Submit',
                handler: function () {
                    /* submit handler */
                } // handler
            }] // items
        }); // create()
        
        Ext.create('Ext.Container', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                items: [{
                    text: 'enter:top, exit:right',
                    handler: function () {
                        actionSheet.show();
                    } // handler
                }] // items (toolbar)
            }] // items (container)
        }); // create()
        
        Ext.Viewport.add(actionSheet);
    } // launch
}); // application()
