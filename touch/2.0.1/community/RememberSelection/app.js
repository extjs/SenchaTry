Ext.Loader.setPath('Ext.plugin', '.');
Ext.application({
    requires: ['Ext.plugin.RememberSelection'],
    launch: function () {
        Ext.define('Country', {
            extend: 'Ext.data.Model',
            config: {
                fields: [{
                    name: 'name',
                    type: 'string'
                }, {
                    name: 'selected',
                    type: 'boolean',
                    defaultValue: false
                }],
                identifier: {
                    type: 'uuid'
                },
                proxy: {
                    id: 'Country',
                    type: 'localstorage'
                }
            }
        });
        Ext.create('Ext.data.Store', {
            model: 'Country',
            storeId: 'Country',
            proxy: {
                id: 'Country',
                type: 'localstorage'
            },
            autoLoad: {
                callback: function (records) {
                    if (Ext.isEmpty(records)) {
                        this.setData([{
                            name: 'United States'
                        }, {
                            name: 'Canada'
                        }, {
                            name: 'Mexico'
                        }]);
                    }
                }
            },
            autoSync: true
        });
        Ext.Viewport.add({
            xtype: 'list',
            scrollable: true,
            itemTpl: '{name}',
            store: 'Country',
            plugins: [{
                xclass: 'Ext.plugin.RememberSelection',
                getDefaultSelectionRecords: function (list) {
                    var store = list.getStore();
                    return [store.findRecord('name', 'United States')];
                }
            }]
        });
    }
});
