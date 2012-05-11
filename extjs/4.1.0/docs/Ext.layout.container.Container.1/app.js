/*global Ext:false */
Ext.onReady(function() {
    Ext.define('Employee', {
        extend: 'Ext.data.Model',
        fields: [{
            name: 'rating',
            type: 'int'
        }, {
            name: 'salary',
            type: 'float'
        }, {
            name: 'name'
        }]
    });

    function createFakeData(count) {
        var firstNames = ['Ed', 'Tommy', 'Aaron', 'Abe', 'Jamie', 'Adam', 'Dave', 'David', 'Jay', 'Nicolas', 'Nige'],
            lastNames = ['Spencer', 'Maintz', 'Conran', 'Elias', 'Avins', 'Mishcon', 'Kaneda', 'Davis', 'Robinson', 'Ferrero', 'White'],
            ratings = [1, 2, 3, 4, 5],
            salaries = [100, 400, 900, 1500, 1000000];

        var data = [];
        for (var i = 0; i < (count || 25); i++) {
            var ratingId = Math.floor(Math.random() * ratings.length),
                salaryId = Math.floor(Math.random() * salaries.length),
                firstNameId = Math.floor(Math.random() * firstNames.length),
                lastNameId = Math.floor(Math.random() * lastNames.length),

                rating = ratings[ratingId],
                salary = salaries[salaryId],
                name = Ext.String.format("{0} {1}", firstNames[firstNameId], lastNames[lastNameId]);

            data.push({
                rating: rating,
                salary: salary,
                name: name
            });
        }
        store.loadData(data);
    }

    // create the Data Store
    var store = Ext.create('Ext.data.Store', {
        id: 'store',
        model: 'Employee',
        proxy: {
            type: 'memory'
        }
    });
    createFakeData(10);

    var grid = Ext.create('Ext.grid.Panel', {
        title: 'Grid loaded with varying number of records',
        anchor: '100%',
        store: store,
        columns: [{
            xtype: 'rownumberer',
            width: 40,
            sortable: false
        }, {
            text: 'Name',
            flex: 1,
            sortable: true,
            dataIndex: 'name'
        }, {
            text: 'Rating',
            width: 125,
            sortable: true,
            dataIndex: 'rating'
        }, {
            text: 'Salary',
            width: 125,
            sortable: true,
            dataIndex: 'salary',
            align: 'right',
            renderer: Ext.util.Format.usMoney
        }]
    });

    Ext.create('Ext.panel.Panel', {
        renderTo: document.body,
        width: 800,
        height: 600,
        layout: {
            type: 'anchor',
            reserveScrollbar: true // There will be a gap even when there's no scrollbar
        },
        autoScroll: true,
        items: grid,
        tbar: {
            defaults: {
                handler: function(b) {
                    createFakeData(b.count);
                }
            },
            items: [{
                text: '10 Items',
                count: 10
            }, {
                text: '100 Items',
                count: 100
            }, {
                text: '300 Items',
                count: 300
            }, {
                text: '1000 Items',
                count: 1000
            }, {
                text: '5000 Items',
                count: 5000
            }]
        }
    });
});
