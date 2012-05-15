/*global Ext:false */
Ext.onReady(function () {
    var btn = Ext.create('Ext.Button', {
        text: 'I am an Ext.Button',
        width: 150 // px
    }); // create()
    
    Ext.create('Ext.Panel', {
        padding: 20,
        bodyPadding: 10,
        height: 150,
        tbar: [{
            xtype: 'button',
            text: 'small (default)',
            handler: function () {
                btn.setScale('small');
                btn.setText('btn.scale = ' + btn.scale);
            } // handler
        }, {
            xtype: 'button',
            text: 'medium',
            handler: function () {
                btn.setScale('medium');
                btn.setText('btn.scale = ' + btn.scale);
            } // handler
        }, {
            xtype: 'button',
            text: 'large',
            handler: function () {
                btn.setScale('large');
                btn.setText('btn.scale = ' + btn.scale);
            } // handler
        }],
        items: [btn],
        renderTo: Ext.getBody()
    }); // create()
}); // onReady()
