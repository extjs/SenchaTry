Ext.define('UserApp.model.User', {
    extend: 'Ext.data.Model',
    idProperty: 'userID',
    fields: [{name: 'userID',   type: 'int'},'name', 'lastname',{name: 'age',   type: 'int'}]
});
