Ext.define('Ext4Example.view.stock.StockForm' ,{
    extend: 'Ext.form.FieldSet',
    alias : 'widget.stockform',

    margin: '0 0 0 10',

    title:'Company details',

    defaults: {
        width: 240,
        labelWidth: 90
    },

    defaultType: 'textfield',

    items: [{
        fieldLabel: 'Name',
        name: 'company'
    },{
        fieldLabel: 'Price',
        name: 'price'
    },{
        fieldLabel: '% Change',
        name: 'pctChange'
    },{
        xtype: 'datefield',
        fieldLabel: 'Last Updated',
        name: 'lastChange'
    }, {
        xtype: 'radiogroup',
        fieldLabel: 'Rating',
        columns: 3,
        defaults: {
            name: 'rating' //Each radio has the same name so the browser will make sure only one is checked at once
        },
        items: [{
            inputValue: '0',
            boxLabel: 'A'
        }, {
            inputValue: '1',
            boxLabel: 'B'
        }, {
            inputValue: '2',
            boxLabel: 'C'
        }]
    }]
});    
