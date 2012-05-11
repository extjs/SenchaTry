/*global Ext:false */
Ext.onReady(function() {
    var enableBtn = Ext.create('Ext.button.Button', {
        text: 'Enable All Items',
        disabled: true,
        scope: this,
        handler: function() {
            //disable the enable button and enable the disable button
            enableBtn.disable();
            disableBtn.enable();

            //enable the toolbar
            toolbar.enable();
        }
    });

    var disableBtn = Ext.create('Ext.button.Button', {
        text: 'Disable All Items',
        scope: this,
        handler: function() {
            //enable the enable button and disable button
            disableBtn.disable();
            enableBtn.enable();

            //disable the toolbar
            toolbar.disable();
        }
    });

    var toolbar = Ext.create('Ext.toolbar.Toolbar', {
        renderTo: document.body,
        width: 400,
        margin: '5 0 0 0',
        items: [enableBtn, disableBtn]
    });
});
