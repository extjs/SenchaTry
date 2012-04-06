Ext.application({
    launch: function () {
        Ext.create('Ext.Container', {
            fullscreen: true,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Button One'
                }, {
                    xtype: 'spacer',
                    width: 50
                }, {
                    xtype: 'button',
                    text: 'Button Two'
                }]
            }, {
                xtype: 'container',
                items: [{
                    xtype: 'button',
                    text: 'Change Ext.Spacer width',
                    handler: function () {
                        //get the spacer using ComponentQuery
                        var spacer = Ext.ComponentQuery.query('spacer')[0],
                            from = 10,
                            to = 250;

                        //set the width to a random number
                        spacer.setWidth(Math.floor(Math.random() * (to - from + 1) + from));
                    }
                }]
            }]
        });
    } // launch
}); // application()
