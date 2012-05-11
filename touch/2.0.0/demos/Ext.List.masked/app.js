/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.List', {
            fullscreen: true,
            itemTpl: '{name}',
            masked: {
                xtype: 'loadmask',
                message: 'Please wait while we fetch some more data... ' +
                    '<hr>Still waiting? Seriously, this dialog won\'t ' +
                    'disappear until you call <code>setMasked(false)</code>'
            }, // masked
            store: {
                fields: ['name'],
                data: [{
                    name: 'Red'
                }, {
                    name: 'Orange'
                }, {
                    name: 'Yellow'
                }, {
                    name: 'Green'
                }, {
                    name: 'Blue'
                }] // data
            } // store
        }); // create()
    } // launch
}); // application()
