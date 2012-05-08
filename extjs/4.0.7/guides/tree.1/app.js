Ext.onReady(function () {
    Ext.create('Ext.tree.Panel', {
        renderTo: Ext.getBody(),
        title: 'Simple Tree',
        width: 150,
        height: 150,
        root: {
            text: 'Root',
            expanded: true,
            children: [{
                text: 'Child 1',
                leaf: true
            }, {
                text: 'Child 2',
                leaf: true
            }, {
                text: 'Child 3',
                expanded: true,
                children: [{
                    text: 'Grandchild',
                    leaf: true
                }]
            }]
        }
    });
});
