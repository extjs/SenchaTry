Ext.application({
    launch: function () {
        Ext.Viewport.add({
            xtype: 'button',
            text: 'Make JsonP Request',
            centered: true,
            handler: function (button) {
                // Mask the viewport
                Ext.Viewport.mask();

                // Remove the button
                button.destroy();

                // Make the JsonP request
                Ext.data.JsonP.request({
                    url: 'http://free.worldweatheronline.com/feed/weather.ashx',
                    callbackKey: 'callback',
                    params: {
                        key: '23f6a0ab24185952101705',
                        q: '94301',
                        // Palo Alto
                        format: 'json',
                        num_of_days: 5
                    },
                    success: function (result) {
                        // Unmask the viewport
                        Ext.Viewport.unmask();

                        // Get the weather data from the json object result
                        var weather = result.data.weather;
                        if (weather) {
                            // Style the viewport html, and set the html of the max temperature
                            Ext.Viewport.setStyleHtmlContent(true);
                            Ext.Viewport.setHtml('The temperature in Palo Alto is <b>' + weather[0].tempMaxF + '° F</b>');
                        }
                    } // success
                }); // request()
            } // handler
        }); // add()
    } // launch
}); // application()
