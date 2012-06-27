Ext.define('ExtMVC.controller.LinkedComboboxes', {
    extend: 'Ext.app.Controller',

    models: ['State', 'City'],

    stores: ['States', 'Cities'],

    views: ['StateCityCombo'],

    init: function() {
        
        this.control({
            'statecityform #stateCombo': {
                select: this.loadCityCombo
            }
        });
    },

     loadCityCombo: function(combo, records) {

        var comboCity = Ext.ComponentQuery.query('statecityform #cityCombo')[0];

        comboCity.setDisabled(true);
        comboCity.setValue('');
        comboCity.store.removeAll();

        comboCity.store.load({
            params: { stateId: combo.getValue() }
        });
        comboCity.setDisabled(false);
     }
});
