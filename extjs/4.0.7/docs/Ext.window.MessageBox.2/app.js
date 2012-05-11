/*global Ext:false */
Ext.onReady(function () {
    Ext.Msg.prompt('Name', 'Please enter your name:', function (btn, text) {
        if (btn == 'ok') {
            // process text value and close...
        }
    });
});
