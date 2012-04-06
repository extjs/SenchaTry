Ext.application({
    launch: function () {
        Ext.define('Contact', {
            extend: 'Ext.data.Model',
            config: {
                fields: ['firstName', 'lastName']
            }
        });

        var store = Ext.create('Ext.data.Store', {
            model: 'Contact',
            sorters: 'lastName',
            grouper: {
                groupFn: function (record) {
                    return record.get('lastName')[0];
                }
            },
            data: [{
                firstName: 'Tommy',
                lastName: 'Maintz'
            }, {
                firstName: 'Rob',
                lastName: 'Dougan'
            }, {
                firstName: 'Ed',
                lastName: 'Spencer'
            }, {
                firstName: 'Jamie',
                lastName: 'Avins'
            }, {
                firstName: 'Aaron',
                lastName: 'Conran'
            }, {
                firstName: 'Dave',
                lastName: 'Kaneda'
            }, {
                firstName: 'Jacky',
                lastName: 'Nguyen'
            }, {
                firstName: 'Abraham',
                lastName: 'Elias'
            }, {
                firstName: 'Jay',
                lastName: 'Robinson'
            }, {
                firstName: 'Nigel',
                lastName: 'White'
            }, {
                firstName: 'Don',
                lastName: 'Griffin'
            }, {
                firstName: 'Nico',
                lastName: 'Ferrero'
            }, {
                firstName: 'Nicolas',
                lastName: 'Belmonte'
            }, {
                firstName: 'Jason',
                lastName: 'Johnston'
            }]
        });

        Ext.create('Ext.List', {
            fullscreen: true,
            itemTpl: '<div class="contact">{firstName} <strong>{lastName}</strong></div>',
            store: store,
            grouped: true
        });
    } // launch
}); // application()
