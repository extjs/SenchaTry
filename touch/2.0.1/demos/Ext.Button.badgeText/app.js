/*global Ext:false */
Ext.application({
    launch: function () {
        var clickCount = 0;
        
        Ext.create('Ext.Container', {
            fullscreen: true,
            styleHtmlContent: true,
            items: [{
                xtype: 'button',
                text: 'badgeText',
                badgeText: '0',
                width: 150,
                handler: function () {
                    this.setBadgeText(++clickCount);
                } // handler
            }] // items
        }); // create()
    } // launch
}); // application()
