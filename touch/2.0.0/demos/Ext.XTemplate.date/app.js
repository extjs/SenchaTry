Ext.application({
    launch: function () {
        Ext.define('MyModel', {
            extend: 'Ext.data.Model',
            config: {
                fields: [
                    {name: 'fname', type: 'string'},
                    {name: 'dob', type: 'date'}
                ] // fields
            } // config
        }); // define()
        
        var myStore = Ext.create('Ext.data.Store', {
            model: 'MyModel',
            sorters: 'dob',
            data: [{
                fname: 'Tony',
                dob: "04/21/1951" // new Date(1951, 3, 21)
            }, {
                fname: 'Angela',
                dob: "02/09/1949" // new Date(1949, 1, 9)
            }, {
                fname: 'Samantha',
                dob: "12/19/1972" // new Date(1972, 11, 19)
            }, {
                fname: 'Jonathan',
                dob: "01/06/1976" // new Date(1976, 0, 6)
            }, {
                fname: 'Mona',
                dob: "07/05/1928" // new Date(1928, 6, 5)
            }] // data
        }); // create()
        
        Ext.create('Ext.List', {
            fullscreen: true,
            store: myStore,
            itemTpl: '<div>{fname} &mdash; <small class="muted">{dob:date("F j, Y")}</small></div>',
            items: {
                xtype: 'titlebar',
                title: 'Ext.XTemplate date()',
                docked: 'top'
            } // items
        }); // create()
    } // launch
}); // application()
