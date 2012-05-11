/*global Ext:false */
Ext.application({
    launch: function() {
        Ext.create('Ext.List', {
            fullscreen: true,

            store: {
                fields: ['name'],
                data: [{
                    name: 'Cowper'
                }, {
                    name: 'Everett'
                }, {
                    name: 'University'
                }, {
                    name: 'Forest'
                }]
            },

            itemTpl: '{name}',

            listeners: {
                select: function(view, record) {
                    Ext.Msg.alert('Selected!', 'You selected ' + record.get('name'));
                }
            }
        });
    }
});
