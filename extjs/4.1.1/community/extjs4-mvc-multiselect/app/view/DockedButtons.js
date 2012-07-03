Ext.define('ExtMVC.view.DockedButtons', {
    extend: 'Ext.toolbar.Toolbar',
    alias : 'widget.bottombuttons',

    ui: 'footer',
    defaults: {
        minWidth: 75
    },

    items: ['->', {
        text: 'Clear',
        action: 'clear'
    }, {
        text: 'Reset',
        action: 'reset'
    }, {
        text: 'Save',
        action: 'save'
    }]

});   
