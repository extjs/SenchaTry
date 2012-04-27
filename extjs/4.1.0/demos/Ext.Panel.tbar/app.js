Ext.onReady(function () {
    Ext.create('Ext.Panel', {
        height: 150,
        title: 'Ext.Panel title',
        renderTo: Ext.getBody(),
        tbar: [{
            xtype: 'label',
            html: "Ext.Panel top bar"
        }], // tbar
        bbar: [{
            xtype: 'label',
            html: 'Ext.Panel bottom bar'
        }], // bbar
        lbar: [{
            xtype: 'label',
            html: 'Ext.Panel left bar'
        }], // lbar
        rbar: [{
            xtype: 'label',
            html: 'Ext.Panel right bar'
        }] // rbar
    }); // create()
}); // onReady()
