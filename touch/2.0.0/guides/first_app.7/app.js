/*global Ext:false */
Ext.application({
    name: 'Sencha',
    launch: function () {
        Ext.create("Ext.tab.Panel", {
            fullscreen: true,
            tabBarPosition: 'bottom',
            items: [{
                title: 'Contact',
                iconCls: 'user',
                xtype: 'formpanel',
                url: 'contact.php',
                layout: 'vbox',
                items: [{
                    xtype: 'fieldset',
                    title: 'Contact Us',
                    instructions: '(email address is optional)',
                    items: [{
                        xtype: 'textfield',
                        label: 'Name'
                    }, {
                        xtype: 'emailfield',
                        label: 'Email'
                    }, {
                        xtype: 'textareafield',
                        label: 'Message'
                    }]
                }, {
                    xtype: 'button',
                    text: 'Send',
                    ui: 'confirm',
                    handler: function () {
                        this.up('formpanel').submit();
                    }
                }]
            }]
        });
    }
});
