Ext.application({
    launch: function() {
        Ext.Msg.prompt('Name', 'Please enter your name:', function(text) {
            // process text value and close...
        });
    }
});