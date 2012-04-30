Ext.onReady(function() {
    Ext.create('Ext.picker.Color', {
        value: '993300',
        // initial selected color
        renderTo: Ext.getBody(),
        listeners: {
            select: function(picker, selColor) {
                alert(selColor);
            }
        }
    });
});
