Ext.application({
    launch: function() {
        //create a textfield where we can listen to text
        var field = Ext.create('Ext.field.Text', {
            xtype: 'textfield',
            label: 'Length: 0'
        });

        //add the textfield into a fieldset
        Ext.Viewport.add({
            xtype: 'formpanel',
            items: [{
                xtype: 'fieldset',
                items: [field],
                instructions: 'Type into the field and watch the count go up after 500ms.'
            }]
        });

        //create our delayed task with a function that returns the fields length as the fields label
        var task = Ext.create('Ext.util.DelayedTask', function() {
            field.setLabel('Length: ' + field.getValue().length);
        });

        // Wait 500ms before calling our function. If the user presses another key
        // during that 500ms, it will be cancelled and we'll wait another 500ms.
        field.on('keyup', function() {
            task.delay(500);
        });
    }
});
