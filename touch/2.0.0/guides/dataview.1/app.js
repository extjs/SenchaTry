/*global Ext:false */
Ext.application({
    launch: function () {
        var touchTeam = Ext.create('Ext.DataView', {
            fullscreen: true,
            store: {
                fields: ['name', 'age'],
                data: [{
                    name: 'Jamie Avins',
                    age: 100
                }, {
                    name: 'Rob Dougan',
                    age: 21
                }, {
                    name: 'Tommy Maintz',
                    age: 24
                }, {
                    name: 'Jacky Nguyen',
                    age: 24
                }, {
                    name: 'Ed Spencer',
                    age: 26
                }]
            },
            itemTpl: '{name} is {age} years old'
        });
    } // launch
}); // application()
