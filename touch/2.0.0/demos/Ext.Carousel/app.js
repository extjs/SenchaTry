/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.Carousel', {
            fullscreen: true,
            defaults: {
                styleHtmlContent: true
            }, // defaults
            items: [
                {
                    html: 'red',
                    style: 'background-color:#f00;'
                }, {
                    html: 'orange',
                    style: 'background-color:#ffb600;'
                }, {
                    html: 'yellow',
                    style: 'background-color:#ff0;'
                }, {
                    html: 'green',
                    style: 'background-color:#80ff4d;'
                }, {
                    html: 'blue',
                    style: 'background-color:#009dff;'
                }
            ] // items
        }); // create()
    } // launch
}); // application()
