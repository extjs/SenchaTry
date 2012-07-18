Ext.define('My.model.Contact', {
    extend: 'Ext.data.Model',
    fields: ['name']
});

Ext.define('My.view.Contact', {
    extend: 'Ext.form.Panel',
    title: 'Contact',
    renderTo: Ext.getBody(),
    items: [{
        xtype: 'textfield',
        fieldLabel: 'Name',
        name: 'name',
        allowBlank: false
    }],
    buttons: [{
        xtype: 'button',
        text: 'Save',
        action: 'save',
        formBind: true

    }]
});


Ext.define('My.controller.Contact', {
    extend: 'Ext.app.Controller',
    views: ['Contact'],

    init: function () {
        this.control({
            'viewport > #mainContent': { //search by ID
                render: this.onMainReady
            },
            'viewport #CreateButton': { //search by ID
                click: this.create
            },
            '[action=save]': { //any save button
                click: this.saveClick
            }
        });
    },

    saveClick: function (button) {
        var panel = button.up('form');
        var form = panel.getForm();
        var record = form.getRecord();
        form.updateRecord(record);

        console.log(record.get('name'));

    },

    create: function () {
        var main = Ext.ComponentQuery.query('#mainContent')[0];
        var contact = Ext.create('My.model.Contact');

        var panel = this.getView('Contact').create();
        var form = panel.getForm();

        form.loadRecord(contact);
        main.add(panel);
    },

    onMainReady: function () {
        console.log('do something');
    }
});


Ext.application({
    name: 'My',
    controllers: ['Contact'],
    launch: function () {

        Ext.QuickTips.init();
        My.app = this; //reference to app instance
        Ext.create('Ext.container.Viewport', {
            layout: {
                type: 'border'
            },
            defaults: {
                split: true
            },
            items: [{
                region: 'north',
                //contentEl: 'header',content read from html in gsp
                html: "This is my temp header",
                id: 'mainHeader'
            }, {
                region: 'east',
                width: 40,
                html: 'This is East'
            }, {
                region: 'south',
                //contentEl: 'footer',
                //content read from html in gsp
                html: "This is my temp footer content",
                height: 30,
                margins: '0 5 5 5',
                bodyPadding: 2,
                // internal text padding
                id: 'mainFooter'
            }, {
                id: 'mainContent',
                //content injected by the controller
                collapsible: false,
                region: 'center',
                //layout: 'fit',
                margins: '5',
                border: true,
                tbar: {
                    xtype: 'toolbar',
                    itemId: 'mainMenu',
                    items: [{
                        text: 'Main Menu 1',
                        menu: {
                            xtype: 'menu',
                            items: [{
                                xtype: 'button',
                                text: 'Contacts',
                                itemId: 'extjs'
                            }, {
                                xtype: 'button',
                                text: 'Orders',
                                itemId: 'extjs2'
                            }],
                            listeners: {
                                'mouseleave': function (menu, e, eOpts) {
                                    console.log('bye bye ');
                                    menu.hide();
                                }
                            }
                        }
                    }, {
                        text: 'Main Menu 2',
                        xtype: 'button',
                        itemId: 'extjs3'
                    }]
                }
            }]
            // eo Viewport.items
        });
    }
});
