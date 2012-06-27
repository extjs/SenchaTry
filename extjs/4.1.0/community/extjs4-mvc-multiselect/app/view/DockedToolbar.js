Ext.define('ExtMVC.view.DockedToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias : 'widget.toptoolbar',

    items: [{
        text: 'Options',
        menu: [{
            text: 'Get value',
            action: 'getValue'
        }, {
            text: 'Set value (2,3)',
            action: 'setValue'
        },{
            text: 'Toggle enabled',
            checked: true,
            action: 'enable'
        },{
            text: 'Toggle delimiter',
            checked: true,
            action: 'delimiter'
        }]
    }]
});    
