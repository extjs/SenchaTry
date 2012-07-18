Ext.define('TR.controller.Search', {
    extend: 'Ext.app.Controller',
    config: {
        control: {
            'searchlist > toolbar > searchfield': {
                change: 'onSearchChange',
                clearicontap: 'onSearchChange'
            }
        }
    },
    
    onSearchChange: function(textfield) {
        var store = Ext.getStore('Search'),
            value = Ext.String.trim(textfield.getValue());

        if(Ext.isEmpty(value)) {
            store.removeAll();
        } else {
            store.clearFilter(true);
            store.filter('query', value);
            store.load();
        }
    }
});