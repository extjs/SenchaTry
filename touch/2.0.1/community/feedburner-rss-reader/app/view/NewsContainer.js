/**
 * @author Andrea Cammarata (@AndreaCammarata)
 * @class RSS.view.NewsContainer
 * @extends Ext.Container
 * View which works as news navigator allowing the user
 * to move through them moving back and forward in time.
 */
Ext.define('RSS.view.NewsContainer', {
    extend: 'Ext.Container',
    alias: 'widget.newscontainer',
    requires: [
        'RSS.tux.fx.animation.TimeMachine', 
        'RSS.tux.fx.layout.card.TimeMachine'
    ],
    config: {
        /* Notice how this view use a custom card layout animation
         * called "timemachine" and how its direction is also
         * custom instead of using the common left, right, up and down ones. */
        layout: {
            type: 'card',
            animation: {
                type: 'timemachine',
                direction: 'future',
                duration: 1000
            }
        },
        items: [
            {
                //Definition of the top docked toolbar
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        /* Definition of the button that allows the user
                         * to go back to the selected feed news list. */
                        text: 'News',
                        action: 'shownews',
                        ui: 'back',
                        navigation: true
                    },
                    {
                        /* Definition of the button that allows the user
                         * to open a new browser page to reach out
                         * the news url. */
                        text: 'Open News',
                        action: 'readmore'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        /* Definition of the button that allows the user
                         * to move to the previous news. */
                        action: 'prevnews',
                        direction: 'past',
                        ui: 'plain',
                        iconMask: true,
                        iconCls: 'arrow_left'
                    },
                    {
                        /* Definition of the button that allows the user
                         * to move to the next news. */
                        action: 'nextnews',
                        direction: 'future',
                        ui: 'plain',
                        iconMask: true,
                        iconCls: 'arrow_right'
                    }
                ]
            }
        ]
    }    
});
