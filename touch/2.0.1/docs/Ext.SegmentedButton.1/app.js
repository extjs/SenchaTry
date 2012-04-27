Ext.application({
    launch: function() {
        var segmentedButton = new Ext.SegmentedButton({
            allowMultiple: true,
            items: [{
                text: 'Option 1'
            }, {
                text: 'Option 2',
                pressed: true
            }, {
                text: 'Option 3'
            }],
            listeners: {
                toggle: function(container, button, pressed) {
                    console.log("User toggled the '" + button.text + "' button: " + (pressed ? 'on' : 'off'));
                }
            }
        });
        Ext.Viewport.add({
            xtype: 'container',
            padding: 10,
            items: [segmentedButton]
        });
    }
});