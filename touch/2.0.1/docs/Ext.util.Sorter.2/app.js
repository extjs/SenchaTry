Ext.application({
    launch: function() {
        var store = Ext.create('Ext.data.Store', {
            fields: ['person'],
            sorters: [{
                // Sort by first letter of last name, in descending order
                sorterFn: function(record1, record2) {
                    var name1 = record1.data.person.name.split('-')[1].substr(0, 1),
                        name2 = record2.data.person.name.split('-')[1].substr(0, 1);

                    return name1 > name2 ? 1 : (name1 == name2 ? 0 : -1);
                },
                direction: 'DESC'
            }],
            data: [{
                person: {
                    name: 'Tommy-Maintz'
                }
            }, {
                person: {
                    name: 'Rob-Dougan'
                }
            }, {
                person: {
                    name: 'Ed-Spencer'
                }
            }, {
                person: {
                    name: 'Nick-Poulden'
                }
            }, {
                person: {
                    name: 'Jamie-Avins'
                }
            }]
        });

        Ext.create('Ext.List', {
            fullscreen: true,
            itemTpl: '{person.name}',
            store: store
        });
    }
});