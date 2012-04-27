Ext.onReady(function() {
    // The data store containing the list of states
    var states = Ext.create('Ext.data.Store', {
        fields: ['abbr', 'name'],
        data: [{
            "abbr": "AL",
            "name": "Alabama"
        }, {
            "abbr": "AK",
            "name": "Alaska"
        }, {
            "abbr": "AZ",
            "name": "Arizona"
        }
        //...
        ]
    });

    // Create the combo box, attached to the states data store
    Ext.create('Ext.form.ComboBox', {
        fieldLabel: 'Choose State',
        store: states,
        queryMode: 'local',
        displayField: 'name',
        valueField: 'abbr',
        renderTo: Ext.getBody()
    });
});