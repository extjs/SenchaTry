Ext.application({
    launch: function () {

        Ext.Viewport.add({
            layout: 'fit',
            items: [{
                docked: 'top',
                xtype: 'toolbar',
                title: 'Ext.event.Event example!'
            }, {
                id: 'logger',
                styleHtmlContent: true,
                html: 'Tap somewhere!',
                padding: 5
            }]
        });

        Ext.Viewport.element.on({
            tap: function (e, node) {
                var string = '';

                string += 'You tapped at: <strong>{ x: ' + e.pageX + ', y: ' + e.pageY + ' }</strong> <i>(e.pageX & e.pageY)</i>';
                string += '<hr />';
                string += 'The HTMLElement you tapped has the className of: <strong>' + e.target.className + '</strong> <i>(e.target)</i>';
                string += '<hr />;';
                string += 'The HTMLElement which has the listener has a className of: <strong>' + e.getTarget().className + '</strong> <i>(e.getTarget())</i>';

                Ext.getCmp('logger').setHtml(string);
            }
        });
    } // launch
}); // application()
