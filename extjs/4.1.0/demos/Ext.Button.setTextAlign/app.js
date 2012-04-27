Ext.onReady(function () {
    var btn = Ext.create('Ext.Button', {
        text: 'Button',
        width: 240,
        height: 50
    }); // create()
    
    Ext.create('Ext.Panel', {
        bodyPadding: 10,
        items: [
            btn
        ], // items
        tbar: [{
            xtype: 'buttongroup',
            title: 'textAlign',
            items: [{
                text: 'left',
                handler: function () {
                    btn.setTextAlign('left');
                } // handler
            }, {
                text: 'center',
                handler: function () {
                    btn.setTextAlign('center');
                } // handler
            }, {
                text: 'right',
                handler: function () {
                    btn.setTextAlign('right');
                } // handler
            }] // items
        }], // tbar
        renderTo: Ext.getBody()
    }); // create()
}); // onReady()
