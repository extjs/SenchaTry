Ext.application({
    launch: function() {
        Ext.define('MyListItem', {
            extend: 'Ext.dataview.component.DataItem',
            requires: ['Ext.Button'],
            xtype: 'mylistitem',

            config: {
                nameButton: true,

                dataMap: {
                    getNameButton: {
                        setText: 'name'
                    }
                }
            },

            applyNameButton: function(config) {
                return Ext.factory(config, Ext.Button, this.getNameButton());
            },

            updateNameButton: function(newNameButton, oldNameButton) {
                if (oldNameButton) {
                    this.remove(oldNameButton);
                }

                if (newNameButton) {
                    this.add(newNameButton);
                }
            }
        });

        Ext.create('Ext.DataView', {
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

            useComponents: true,
            defaultType: 'mylistitem'
        });
    }
});
