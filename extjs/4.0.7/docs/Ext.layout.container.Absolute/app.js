Ext.onReady(function () {
    Ext.create('Ext.form.Panel', {
        title: 'Absolute Layout',
        width: 300,
        height: 275,
        layout: {
            type: 'absolute',
            // layout-specific configs go here
            //itemCls: 'x-abs-layout-item',
        },
        url: 'save-form.php',
        defaultType: 'textfield',
        items: [{
            x: 10,
            y: 10,
            xtype: 'label',
            text: 'Send To:'
        }, {
            x: 80,
            y: 10,
            name: 'to',
            anchor: '90%' // anchor width by percentage
        }, {
            x: 10,
            y: 40,
            xtype: 'label',
            text: 'Subject:'
        }, {
            x: 80,
            y: 40,
            name: 'subject',
            anchor: '90%' // anchor width by percentage
        }, {
            x: 0,
            y: 80,
            xtype: 'textareafield',
            name: 'msg',
            anchor: '100% 100%' // anchor width and height
        }],
        renderTo: Ext.getBody()
    });
});
