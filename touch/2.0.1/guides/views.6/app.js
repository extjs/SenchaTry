/*global Ext:false */
Ext.application({
    launch: function() {
        // as before
        Ext.define('MyApp.view.MyView', {
            extend: 'Ext.Panel',
            config: {
                border: 0
            },
            applyBorder: function(value) {
                return value + "px solid red";
            },
            updateBorder: function(newValue, oldValue) {
                this.element.setStyle('border', newValue);
            }
        });

        // create an instance of MyView with a spinner field that updates the border config
        var view = Ext.create('MyApp.view.MyView', {
            border: 5,
            fullscreen: true,
            styleHtmlContent: true,
            html: 'Tap the spinner to change the border config option',
            items: {
                xtype: 'spinnerfield',
                label: 'Border size',
                docked: 'top',
                value: 5,
                minValue: 0,
                maxValue: 100,
                increment: 1,
                listeners: {
                    spin: function(spinner, value) {
                        view.setBorder(value);
                    }
                }
            }
        });
    }
});
