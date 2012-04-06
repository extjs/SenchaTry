Ext.onReady(function () {
    var ch = Ext.create('Ext.form.field.Checkbox', {
        boxLabel: 'allowDepress',
        handler: function () {
            btn.allowDepress = this.checked;
            btn.setText('<code>allowDepress: ' + btn.allowDepress + '</code>');
        } // handler
    }); // create()
    
    var toggleBtn = Ext.create('Ext.Button', {
        handler: function () {
            btn.toggle();
        },
        // handler
        text: 'toggle()'
    }); // create()
    
    var btn = Ext.create('Ext.Button', {
        allowDepress: ch.checked,
        enableToggle: true,
        text: '<code>allowDepress: ' + ch.checked + '</code>'
    }); // create()
    
    Ext.create('Ext.Panel', {
        bodyPadding: 20,
        items: [btn],
        renderTo: Ext.getBody(),
        tbar: [
            ch,
            toggleBtn
        ], // tbar
    }); // create()
}); // onReady()
