Ext.onReady(function () {
    Ext.create('Ext.Button', {
        menu: [
            {
                text: 'Ext JS 4',
                handler: handleMenuClick
            }, {
                text: 'Ext JS 3',
                handler: handleMenuClick
            }, {
                text: 'Sencha Touch 2',
                handler: handleMenuClick
            }, {
                text: 'Sencha Touch 1',
                handler: handleMenuClick
            }, {
                text: 'Touch Charts',
                handler: handleMenuClick
            }, {
                text: 'Sencha Animator',
                handler: handleMenuClick
            }, {
                text: 'Sencha.io',
                handler: handleMenuClick
            }
        ], // menu
        renderTo: Ext.getBody(),
        text: 'Menu Button'
    });
    
    function handleMenuClick(obj, evt) {
        Ext.Msg.alert('Menu Item clicked', obj.text);
    }
});
