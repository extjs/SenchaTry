Ext.onReady(function () {
    Ext.create('Ext.Button', {
        enableToggle: true,
        text: 'Sencha',
        toggleHandler: function (button, state) {
            Ext.Msg.alert('', button.text + ' button is toggled? <code>' + state.toString() + '</code>');
        }, // toggleHandler
        renderTo: Ext.getBody()
    }); // create()
}); // onReady()
