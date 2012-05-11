/*global Ext:false */
Ext.application({
    launch: function() {
        Ext.createWidget('container', {
            fullscreen: true,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'center'
            },
            items: [{
                xtype: 'button',
                text: 'Change iconCls',
                handler: function() {
                    // classes for all the icons to loop through.
                    var availableIconCls = ['action', 'add', 'arrow_down', 'arrow_left', 'arrow_right', 'arrow_up', 'compose', 'delete', 'organize', 'refresh', 'reply', 'search', 'settings', 'star', 'trash', 'maps', 'locate', 'home'];
                    // get the text of this button,
                    // so we know which button we don't want to change
                    var text = this.getText();

                    // use ComponentQuery to find all buttons on the page
                    // and loop through all of them
                    Ext.Array.forEach(Ext.ComponentQuery.query('button'), function(button) {
                        // if the button is the change iconCls button, continue
                        if (button.getText() == text) {
                            return;
                        }

                        // get the index of the new available iconCls
                        var index = availableIconCls.indexOf(button.getIconCls()) + 1;

                        // update the iconCls of the button with the next iconCls, if one exists.
                        // if not, use the first one
                        button.setIconCls(availableIconCls[(index == availableIconCls.length) ? 0 : index]);
                    });
                }
            }, {
                xtype: 'toolbar',
                docked: 'top',
                defaults: {
                    iconMask: true
                },
                items: [{
                    xtype: 'spacer'
                }, {
                    iconCls: 'action'
                }, {
                    iconCls: 'add'
                }, {
                    iconCls: 'arrow_down'
                }, {
                    iconCls: 'arrow_left'
                }, {
                    iconCls: 'arrow_up'
                }, {
                    iconCls: 'compose'
                }, {
                    iconCls: 'delete'
                }, {
                    iconCls: 'organize'
                }, {
                    iconCls: 'refresh'
                }, {
                    xtype: 'spacer'
                }]
            }, {
                xtype: 'toolbar',
                docked: 'bottom',
                ui: 'light',
                defaults: {
                    iconMask: true
                },
                items: [{
                    xtype: 'spacer'
                }, {
                    iconCls: 'reply'
                }, {
                    iconCls: 'search'
                }, {
                    iconCls: 'settings'
                }, {
                    iconCls: 'star'
                }, {
                    iconCls: 'trash'
                }, {
                    iconCls: 'maps'
                }, {
                    iconCls: 'locate'
                }, {
                    iconCls: 'home'
                }, {
                    xtype: 'spacer'
                }]
            }]
        });
    }
});
