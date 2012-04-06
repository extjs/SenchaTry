Ext.application({
    launch: function () {
        Ext.create('Ext.Container', {
            fullscreen: true,
            layout: {
                type: 'vbox',
                pack: 'center'
            },
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                title: 'My Toolbar'
            }, {
                xtype: 'container',
                defaults: {
                    xtype: 'button',
                    margin: '10 10 0 10'
                },
                items: [{
                    text: 'Toggle docked',
                    handler: function () {
                        var toolbar = Ext.ComponentQuery.query('toolbar')[0],
                            newDocked = (toolbar.getDocked() == 'top') ? 'bottom' : 'top';

                        toolbar.setDocked(newDocked);
                    }
                }, {
                    text: 'Toggle UI',
                    handler: function () {
                        var toolbar = Ext.ComponentQuery.query('toolbar')[0],
                            newUi = (toolbar.getUi() == 'light') ? 'dark' : 'light';

                        toolbar.setUi(newUi);
                    }
                }, {
                    text: 'Change title',
                    handler: function () {
                        var toolbar = Ext.ComponentQuery.query('toolbar')[0],
                            titles = ['My Toolbar', 'Ext.Toolbar', 'Configurations are awesome!', 'Beautiful.'],
                            //internally, the title configuration gets converted into a {@link Ext.Title} component,
                            //so you must get the title configuration of that component
                            title = toolbar.getTitle().getTitle(),
                            newTitle = titles[titles.indexOf(title) + 1] || titles[0];

                        toolbar.setTitle(newTitle);
                    }
                }]
            }]
        });
    } // launch
}); // application()
