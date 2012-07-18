Ext.define('TR.controller.UserPhotos', {
    extend: 'Ext.app.Controller',
    config: {
        control: {
            'userlist > toolbar > searchfield': {
                change: 'onSearchChange',
                clearicontap: 'onSearchChange'
            }
        }
    },
    
    onSearchChange: function(textfield) {
        var store   = Ext.getStore('UserPhotos'),
            value   = Ext.String.trim(textfield.getValue());
            
        if(Ext.isEmpty(value)) {
            store.removeAll();
        } else {
            store.clearFilter(true);
            store.filter('user_name', value);
            store.load();
        }
    }
});