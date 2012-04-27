Ext.application({
    launch: function () {
        Ext.define('OS', {
            extend: 'Ext.data.Model'
        }); // define()
        
        var store = Ext.create('Ext.data.Store', {
            model: 'OS',
            sorters: 'name',
            fields: ['name', 'value'],
            data: [{
                name: 'iOS',
                value: Ext.os.is('iOS')
            }, {
                name: 'iPad',
                value: Ext.os.is('iPad')
            }, {
                name: 'iPhone',
                value: Ext.os.is('iPhone')
            }, {
                name: 'iPod',
                value: Ext.os.is('iPod')
            }, {
                name: 'Android',
                value: Ext.os.is('Android')
            }, {
                name: 'WebOS',
                value: Ext.os.is('WebOS')
            }, {
                name: 'BlackBerry',
                value: Ext.os.is('Bada')
            }, {
                name: 'MacOS',
                value: Ext.os.is('MacOS')
            }, {
                name: 'RIMTablet',
                value: Ext.os.is('RIMTablet')
            }, {
                name: 'Windows',
                value: Ext.os.is('Windows')
            }, {
                name: 'Linux',
                value: Ext.os.is('Linux')
            }, {
                name: 'Other',
                value: Ext.os.is('Other')
            }] // data
        }); // create()
        
        Ext.create('Ext.List', {
            fullscreen: true,
            itemTpl: '{name}: <code>{value}</code>',
            store: store
        }); // create()
        
        Ext.Msg.alert('You are using ' + Ext.os.name);
    } // launch
}); // application()
