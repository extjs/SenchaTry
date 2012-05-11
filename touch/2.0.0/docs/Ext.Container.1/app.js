/*global Ext:false */
Ext.application({
    launch: function () {
        //this is the Panel we'll be adding below
        var aboutPanel = Ext.create('Ext.Panel', {
            html: 'About this app'
        });

        //this is the Panel we'll be adding to
        var mainPanel = Ext.create('Ext.Panel', {
            fullscreen: true,

            layout: 'hbox',
            defaults: {
                flex: 1
            },

            items: {
                html: 'First Panel',
                style: 'background-color: #5E99CC;'
            }
        });

        //now we add the first panel inside the second
        mainPanel.add(aboutPanel);

    } // launch
}); // application()
