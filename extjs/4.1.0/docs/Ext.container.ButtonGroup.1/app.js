/*global Ext:false */
Ext.onReady(function() {
    Ext.create('Ext.panel.Panel', {
        title: 'Panel with ButtonGroup',
        width: 300,
        height: 200,
        renderTo: document.body,
        bodyPadding: 10,
        html: 'HTML Panel Content',
        tbar: [{
            xtype: 'buttongroup',
            columns: 3,
            title: 'Clipboard',
            items: [{
                text: 'Paste',
                scale: 'large',
                rowspan: 3,
                iconCls: 'add',
                iconAlign: 'top',
                cls: 'btn-as-arrow'
            }, {
                xtype: 'splitbutton',
                text: 'Menu Button',
                scale: 'large',
                rowspan: 3,
                iconCls: 'add',
                iconAlign: 'top',
                arrowAlign: 'bottom',
                menu: [{
                    text: 'Menu Item 1'
                }]
            }, {
                xtype: 'splitbutton',
                text: 'Cut',
                iconCls: 'add16',
                menu: [{
                    text: 'Cut Menu Item'
                }]
            }, {
                text: 'Copy',
                iconCls: 'add16'
            }, {
                text: 'Format',
                iconCls: 'add16'
            }]
        }]
    });
});
