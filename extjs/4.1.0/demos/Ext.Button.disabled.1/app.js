/*global Ext:false */
Ext.onReady(function () {
    var btn = Ext.create('Ext.Button', {
        disabled: true,
        handler: function () {
            Ext.Msg.alert('', 'You clicked the button.');
        }, // handler
        text: 'Button'
    }); // create()
    
    Ext.create('Ext.Panel', {
        bodyPadding: 20,
        items: [btn],
        renderTo: Ext.getBody(),
        tbar: [{
            xtype: 'checkbox',
            boxLabel: 'disabled',
            checked: btn.disabled,
            handler: function () {
                btn.setDisabled(this.checked);
            } // handler
        }] // tbar
    }); // create()
}); // onReady()
