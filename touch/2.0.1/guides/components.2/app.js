Ext.application({
    launch: function() {
        //we can configure the HTML when we instantiate the Component
        var panel = Ext.create('Ext.Panel', {
            fullscreen: true,
            html: 'This is a Panel'
        });

        //we can update the HTML later using the setHtml method:
        panel.setHtml('Some new HTML');

        //we can retrieve the current HTML using the getHtml method:
        alert(panel.getHtml()); //alerts "Some new HTML"
    }
});
