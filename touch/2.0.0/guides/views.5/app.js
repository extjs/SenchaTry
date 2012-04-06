Ext.application({
    launch: function () {
        Ext.define('MyApp.view.MyView', {
            extend: 'Ext.Panel',
            config: {
                border: 10
            }
        });

        var view = Ext.create('MyApp.view.MyView');
        alert(view.getBorder()); //alerts 10
        view.setBorder(15);
        alert(view.getBorder()); //now alerts 15
    } // launch
}); // application()
