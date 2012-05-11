/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.Container', {
            fullscreen: true,
            styleHtmlContent: true,
            data: [{
                fname: 'Stratton',
                lname: 'Sclavos',
                role: 'Executive Chairman'
            }, {
                fname: 'Michael',
                lname: 'Mullany',
                role: 'CEO'
            }, {
                fname: 'Ted',
                lname: 'Driscoll',
                role: 'Vice President Worldwide Sales'
            }, {
                fname: 'Abraham',
                lname: 'Elias',
                role: 'Chief Technical Officer'
            }, {
                fname: 'Jeff',
                lname: 'Hartley',
                role: 'Vice President of Services and Training'
            }, {
                fname: 'Adam',
                lname: 'Mishcon',
                role: 'Vice President of Operations'
            }, {
                fname: 'Judy',
                lname: 'Lin',
                role: 'Vice President of Engineering'
            }], // data
            tpl: '<tpl for="."><div><strong>{lname}</strong>, {fname} <em class="muted">({role})</em></div></tpl>'
        }); // create()
    } // launch
}); // application()
