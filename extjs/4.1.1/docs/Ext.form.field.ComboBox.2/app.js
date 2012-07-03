/*global Ext:false */
Ext.onReady(function () {
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
        }]
    });

    Ext.create('Ext.form.ComboBox', {
        fieldLabel: 'Choose State',
        store: states,
        queryMode: 'local',
        valueField: 'abbr',
        renderTo: Ext.getBody(),
        // Template for the dropdown menu.
        // Note the use of "x-boundlist-item" class,
        // this is required to make the items selectable.
        tpl: Ext.create('Ext.XTemplate', '<tpl for=".">', '<div class="x-boundlist-item">{abbr} - {name}</div>', '</tpl>'),
        // template for the content inside text field
        displayTpl: Ext.create('Ext.XTemplate', '<tpl for=".">', '{abbr} - {name}', '</tpl>')
    });
});
