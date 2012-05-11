/*global Ext:false */
Ext.application({
    launch: function() {
        Ext.Viewport.add({
            xtype: 'container',
            layout: 'hbox',
            items: [{
                flex: 1,
                html: 'left item',
                style: 'background:#eee;'
            }, {
                flex: 2,
                html: 'right, item',
                items: [{
                    xtype: 'panel',
                    html: 'This is a centered panel within this container',
                    centered: true
                }]
            }]
        });
    }
});
