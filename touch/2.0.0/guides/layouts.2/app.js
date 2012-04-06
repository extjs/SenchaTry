Ext.application({
    launch: function () {
        var container = Ext.create('Ext.Container', {
            fullscreen: true,
            layout: {
                type: 'vbox',
                align: 'start',
                pack: 'start'
            },
            items: [{
                docked: 'top',
                xtype: 'titlebar',
                title: 'VBox Layout'
            },
            {
                docked: 'top',
                xtype: 'toolbar',
                items: [{
                    xtype: 'container',
                    html: 'Pack: ',
                    style: 'color: #fff; padding: 0 10px; width: 85px;'
                }, {
                    xtype: 'segmentedbutton',
                    allowDepress: false,
                    items: [{
                        text: 'Start',
                        handler: function () {
                            layout.setPack('start');
                        },
                        pressed: true
                    }, {
                        text: 'Center',
                        handler: function () {
                            layout.setPack('center');
                        }
                    }, {
                        text: 'End',
                        handler: function () {
                            layout.setPack('end');
                        }
                    }]
                }]
            }, {
                docked: 'top',
                xtype: 'toolbar',
                items: [{
                    xtype: 'container',
                    html: 'Align: ',
                    style: 'color: #fff; padding: 0 10px; width: 85px;'
                }, {
                    xtype: 'segmentedbutton',
                    allowDepress: false,
                    items: [{
                        text: 'Start',
                        handler: function () {
                            layout.setAlign('start');
                        },
                        pressed: true
                    }, {
                        text: 'Center',
                        handler: function () {
                            layout.setAlign('center');
                        }
                    }, {
                        text: 'End',
                        handler: function () {
                            layout.setAlign('end');
                        }
                    }, {
                        text: 'Stretch',
                        handler: function () {
                            layout.setAlign('stretch');
                        }
                    }]
                }]
            },
            {
                xtype: 'button',
                text: 'Btn 1',
                margin: 2
            }, {
                xtype: 'button',
                text: 'Btn 2',
                margin: 2
            }, {
                xtype: 'button',
                text: 'Btn 3',
                margin: 2
            }]
        });

        var layout = container.getLayout();
    } // launch
}); // application()
