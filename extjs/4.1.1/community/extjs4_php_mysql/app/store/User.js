Ext.define('UserApp.store.User', {
    extend: 'Ext.data.Store',
    model: 'UserApp.model.User',
    autoLoad: true,
    pageSize: 5, // numero de registros por Grid
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/readUser.php',
            update: 'data/updateUser.php',
            create: 'data/createUser.php',
            destroy: 'data/deleteUser.php'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            root: 'data',
            encode: true
        }
    }
});
