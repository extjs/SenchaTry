Ext.application({
    launch: function() {
        var myButton = Ext.Viewport.add({
            xtype: 'button',
            centered: true,
            text: "Just wait 2 seconds",

            listeners: {
                myEvent: function(button, points) {
                    alert('myEvent was fired! You score ' + points + ' points');
                }
            }
        });

        Ext.defer(function() {
            var number = Math.ceil(Math.random() * 100);

            myButton.fireEvent('myEvent', myButton, number);
        }, 2000);
    }
});