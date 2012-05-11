/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.List', {
            fullscreen: true,
            inline: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    text: 'inline = true',
                    handler: function () {
                        this.up('list').setInline(true);
                    } // handler
                }, {
                    text: 'inline = false',
                    handler: function () {
                        this.up('list').setInline(false);
                    } // handler
                }, {
                    text: 'inline = {wrap: false}',
                    handler: function () {
                        this.up('list').setInline({wrap:false});
                    } // handler
                }] // items (toolbar)
            }], // items (list)
            store: {
                fields: ['name', 'league', 'division'],
                sorters: 'name',
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
