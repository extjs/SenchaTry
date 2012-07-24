Ext.onReady(function () {
    var win = Ext.widget('window', {
        title: "Flash animation inside an ExtJS 4 Component!",
        layout: 'fit',
        width: 700,
        height: 500,
        resizable: true,
        items: {
            xtype: 'flash',
            url: 'airballoon/AIRBALLOON.swf'
        }
    });
    win.show();
});
