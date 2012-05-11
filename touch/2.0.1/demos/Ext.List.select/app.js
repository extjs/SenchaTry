/*global Ext:false */
Ext.application({
    launch: function () {
        var myList = Ext.create('Ext.List', {
            fullscreen: true,
            mode: 'MULTI',
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    text: 'Select item #1',
                    handler: function () {
                        myList.select(1);
                    } // handler
                }, {
                    text: 'Select item #3',
                    handler: function () {
                        myList.select(3);
                    } // handler
                }, {
                    text: 'Select items #0 & #2',
                    handler: function () {
                        myList.select(0);
                        myList.select(2, true);
                    } // handler
                }, {
                    text: 'Select all',
                    handler: function () {
                        myList.selectAll();
                    } // handler
                }] // items
            }], // items
            store: {
                fields: ['name', 'league', 'division'],
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
