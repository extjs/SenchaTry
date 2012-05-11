/*global Ext:false */
Ext.application({
    launch: function () {
        var darkUI = Ext.create('Ext.Carousel', {
            defaults: {
                styleHtmlContent: true
            }, // defaults
            ui: 'dark',
            width: '100%',
            height: 100,
            items: [
                {
                    html: 'red (ui:dark)',
                    style: 'background-color:#f00;'
                }, {
                    html: 'orange (ui:dark)',
                    style: 'background-color:#ffb600;'
                }, {
                    html: 'yellow (ui:dark)',
                    style: 'background-color:#ff0;'
                }, {
                    html: 'green (ui:dark)',
                    style: 'background-color:#80ff4d;'
                }, {
                    html: 'blue (ui:dark)',
                    style: 'background-color:#009dff;'
                }
            ] // items
        }); // create()
        
        var lightUI = Ext.create('Ext.Carousel', {
            defaults: {
                styleHtmlContent: true
            }, // defaults
            ui: 'light',
            width: '100%',
            height: 100,
            items: [
                {
                    html: 'red (ui:light)',
                    style: 'background-color:#f00;'
                }, {
                    html: 'orange (ui:light)',
                    style: 'background-color:#ffb600;'
                }, {
                    html: 'yellow (ui:light)',
                    style: 'background-color:#ff0;'
                }, {
                    html: 'green (ui:light)',
                    style: 'background-color:#80ff4d;'
                }, {
                    html: 'blue (ui:light)',
                    style: 'background-color:#009dff;'
                }
            ] // items
        }); // create()
        
        Ext.create('Ext.Panel', {
            fullscreen: true,
            items: [
                darkUI, 
                lightUI
            ] // items
        }); // create()
    } // launch
}); // application()
