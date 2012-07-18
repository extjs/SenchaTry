Ext.setup({
    onReady: function() {

        //create a tabpanel with scalefade layout animation
        Ext.Viewport.add({
            xtype: 'tabpanel',
            layout: {
                type: 'card',
                animation: 'scalefade'
            },
            defaults: {
                padding: 20
            },
            items: [{
                title: 'Card 1',
                html: 'Card 1',
                style: 'background: #FFF;',

                items: [{
                    xtype: 'button',
                    text: 'ScaleFade as individual show/hide() animation',
                    handler: animateComponent
                }]
            },{
                title: 'Card 2',
                html: 'Card 2',
                style: 'background: #CCC;'
            },{
                title: 'Card 3',
                html: 'Card 3',
                style: 'background: #777;'
            }]
        });

        //create a panel with scalefade animation on show and hide
        function animateComponent() {
            var panel = Ext.Viewport.add({
                xtype: 'panel',
                width: 400,
                height: 200,
                centered: true,
                modal: true,
                hideOnMaskTap: true,
                hidden: true,
                showAnimation: 'scalefade',
                hideAnimation: {
                    type: 'scalefade',
                    out: true
                },
                html: 'Tap the mask to hide'
            });

            panel.show();
        }
    }
});
