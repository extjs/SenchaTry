/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.List', {
            fullscreen: true,
            grouped: true,
            ui: 'round',
            store: {
                fields: ['name', 'league', 'division'],
                sorters: 'name',
                grouper: {
                    groupFn: function (item) {
                        return item.get('league') + ' ' + item.get('division');
                    }
                },
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
            }, // store
            itemTpl: '{name}'
        }); // create()
    } // launch
}); // application()
