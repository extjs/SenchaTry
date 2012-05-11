/*global Ext:false */
Ext.application({
    launch: function () {
        var store = Ext.create('Ext.data.Store', {
            fields: ['name', 'league', 'division'],
            sorters: 'name',
            grouper: {
                groupFn: function (item) {
                    return item.get('name')[0];
                } // groupFn
            }, // grouper
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
        }); // create(store)
        
        Ext.create('Ext.TabPanel', {
            fullscreen: true,
            items: [{
                xtype: 'list',
                title: '<code>pinHeaders:true</code> (default)',
                pinHeaders: true,
                grouped: true,
                store: store,
                itemTpl: '{name}'
            }, {
                xtype: 'list',
                title: '<code>pinHeaders:false</code>',
                pinHeaders: false,
                grouped: true,
                store: store,
                itemTpl: '{name}'
            }] // items
        }); // create(tabpanel)
    } // launch
}); // application()
