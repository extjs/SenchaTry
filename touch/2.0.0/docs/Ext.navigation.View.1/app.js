/*global Ext:false */
Ext.application({
    launch: function () {
        var view = Ext.create('Ext.NavigationView', {
            fullscreen: true,
            items: [{
                title: 'First',
                items: [{
                    xtype: 'button',
                    text: 'Push a new view!',
                    handler: function () {
                        //use the push() method to push another view. It works much like
                        //add() or setActiveItem(). it accepts a view instance, or you can give it
                        //a view config.
                        view.push({
                            title: 'Second',
                            html: 'Second view!'
                        });
                    }
                }]
            }]
        });
    } // launch
}); // application()
