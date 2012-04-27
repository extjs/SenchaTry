Ext.application({
    launch: function () {
        Ext.create('Ext.data.Store', {
                storeId: 'myStore',
                fields: ['name', 'league', 'division'],
                sorters: 'name',
                filters: [{
                    property: 'division',
                    value: 'West'
                }], // filters
                data: [{
                    name: 'New York Yankees',
                    league: 'AL',
                    division: 'East'
                }, {
                    name: 'Tampa Bay',
                    league: 'AL',
                    division: 'East'
                }, {
                    name: 'Boston',
                    league: 'AL',
                    division: 'East'
                }, {
                    name: 'Toronto',
                    league: 'AL',
                    division: 'East'
                }, {
                    name: 'Baltimore',
                    league: 'AL',
                    division: 'East'
                }, {
                    name: 'Detroit',
                    league: 'AL',
                    division: 'Central'
                }, {
                    name: 'Cleveland',
                    league: 'AL',
                    division: 'Central'
                }, {
                    name: 'Chicago White Sox',
                    league: 'AL',
                    division: 'Central'
                }, {
                    name: 'Kansas City',
                    league: 'AL',
                    division: 'Central'
                }, {
                    name: 'Minnesota',
                    league: 'AL',
                    division: 'Central'
                }, {
                    name: 'Texas',
                    league: 'AL',
                    division: 'West'
                }, {
                    name: 'Los Angeles Angels',
                    league: 'AL',
                    division: 'West'
                }, {
                    name: 'Oakland',
                    league: 'AL',
                    division: 'West'
                }, {
                    name: 'Seattle',
                    league: 'AL',
                    division: 'West'
                }] // data
        }); // create()
        
        Ext.create('Ext.List', {
            fullscreen: true,
            items: [{
                xtype: 'titlebar',
                docked: 'top',
                ui: 'neutral',
                items: [{
                    text: 'West only',
                    handler: function () {
                        var sto = Ext.getStore('myStore');
                        // clear all existing filters
                        sto.clearFilter();
                        sto.filter('division', 'West');
                    } // handler
                }, {
                    text: 'Central only',
                    handler: function () {
                        var sto = Ext.getStore('myStore');
                        // clear all existing filters
                        sto.clearFilter();
                        sto.filter('division', 'Central');
                    } // handler
                }, {
                    text: 'East only',
                    handler: function () {
                        var sto = Ext.getStore('myStore');
                        // clear all existing filters
                        sto.clearFilter();
                        sto.filter('division', 'East');
                    } // handler
                }, {
                    text: 'Clear filters',
                    ui: 'decline',
                    align: 'right',
                    handler: function () {
                        Ext.getStore('myStore').clearFilter();
                    } // handler
                }] // items (toolbar)
            }], // items (list)
            store: 'myStore',
            itemTpl: '{name}'
        }); // create()
    } // launch
}); // application()
