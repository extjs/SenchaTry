/*global Ext:false */
Ext.onReady(function() {
    Ext.create('Ext.button.Cycle', {
        showText: true,
        prependText: 'View as ',
        renderTo: Ext.getBody(),
        menu: {
            id: 'view-type-menu',
            items: [{
                text: 'text only',
                iconCls: 'view-text',
                checked: true
            }, {
                text: 'HTML',
                iconCls: 'view-html'
            }]
        },
        changeHandler: function(cycleBtn, activeItem) {
            Ext.Msg.alert('Change View', activeItem.text);
        }
    });
});
