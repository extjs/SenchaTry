/**
 * @author Andrea Cammarata (@AndreaCammarata)
 * @class RSS.view.New
 * @extends Ext.form.Panel
 * View which allow the user to add a new feed
 * that should be handled by the application.
 */
Ext.define('RSS.view.New', {
    extend: 'Ext.form.Panel',
    alias: 'widget.newfeed',
    config: {
        items: [
            {
                //Definition of the top docked toolbar
                xtype: 'toolbar',
                itemId: 'tbrFeedConfig',
                docked: 'top',
                items: [
                    {    
                        /* Definition of the button which allows
                         * the user to go back to the feeds view. */
                        text: 'Feeds',
                        action: 'showfeeds',
                        ui: 'back',
                        navigation: true
                    }
                ]
            },
            {
                /* Definition of the fieldset which contains some
                 * form element that allows the user to specify all
                 * the feed related informations. */
                xtype: 'fieldset',
                title: 'Feed',
                items: [
                    {
                        //Field which contains the feed name
                        xtype: 'textfield',
                        label: 'Name',
                        name: 'name'
                    },
                    {
                        //Field which contains the feed url
                        xtype: 'textfield',
                        label: 'Url',
                        placeHolder: 'http://feeds.feedburner.com/...',
                        name: 'url'
                    }
                ]
            },
            {
                /* Definition of a button that allows the user
                 * to save the new specified field. */
                xtype: 'button',
                action: 'savefeed',
                ui: 'action',
                text: 'Save',
                height: 50
            },
            {
                xtype: 'container',
                height: 10
            },
            {
                /* Definition of a button that allows the user
                 * to delete the selected feed. */
                xtype: 'button',
                action: 'deletefeed',
                ui: 'decline',
                text: 'Delete',
                hidden: true,
                height: 50
            }
        ]
    }    
});
