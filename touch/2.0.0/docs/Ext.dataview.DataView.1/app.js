/*global Ext:false */
Ext.application({
    launch: function () {
        var touchTeam = Ext.create('Ext.DataView', {
            fullscreen: true,
            store: {
                fields: ['name', 'age'],
                data: [{
                    name: 'Jamie',
                    age: 100
                }, {
                    name: 'Rob',
                    age: 21
                }, {
                    name: 'Tommy',
                    age: 24
                }, {
                    name: 'Jacky',
                    age: 24
                }, {
                    name: 'Ed',
                    age: 26
                }]
            },

            itemTpl: '<div>{name} is {age} years old</div>'
        });
    } // launch
}); // application()
