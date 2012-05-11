/*global Ext:false */
Ext.application({
    launch: function() {
        Ext.define('MyApp.view.Image', {
            extend: 'Ext.Img',

            config: {
                title: null,
                description: null
            },

            //sets up our tap event listener
            initialize: function() {
                this.callParent(arguments);

                this.element.on('tap', this.onTap, this);
            },

            //this is called whenever you tap on the image
            onTap: function() {
                Ext.Msg.alert(this.getTitle(), this.getDescription());
            }
        });

        //creates a full screen tappable image
        Ext.create('MyApp.view.Image', {
            title: 'Orion Nebula',
            description: 'The Orion Nebula is rather pretty',

            src: 'http://apod.nasa.gov/apod/image/1202/oriondeep_andreo_960.jpg',
            fullscreen: true
        });
    }
});
