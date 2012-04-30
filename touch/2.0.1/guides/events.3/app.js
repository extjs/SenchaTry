Ext.application({
    launch: function() {
        Ext.Viewport.add({
            xtype: 'button',
            centered: true,
            text: 'My Button',

            listeners: {
                tap: function() {
                    this.hide();
                },
                hide: function() {
                    //waits 1 second (1000ms) then shows the button again
                    Ext.defer(function() {
                        this.show();
                    }, 1000, this);
                }
            }
        });
    }
});
