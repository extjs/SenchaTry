Ext.application({
    launch: function() {
        var store = Ext.create('Ext.data.Store', {
            fields: ['firstName', 'lastName'],
            sorters: 'lastName',

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
                firstName: 'Nick',
                lastName: 'Poulden'
            }]
        });

        Ext.create('Ext.List', {
            fullscreen: true,
            itemTpl: '<div class="contact">{firstName} <strong>{lastName}</strong></div>',
            store: store
        });
    }
});
