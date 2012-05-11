/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.form.Panel', {
        bodyPadding: 10,
        width: 300,
        title: 'Pizza Order',
        items: [{
            xtype: 'fieldcontainer',
            fieldLabel: 'Toppings',
            defaultType: 'checkboxfield',
            items: [{
                boxLabel: 'Anchovies',
                name: 'topping',
                inputValue: '1',
                id: 'checkbox1'
            }, {
                boxLabel: 'Artichoke Hearts',
                name: 'topping',
                inputValue: '2',
                checked: true,
                id: 'checkbox2'
            }, {
                boxLabel: 'Bacon',
                name: 'topping',
                inputValue: '3',
                id: 'checkbox3'
            }]
        }],
        bbar: [{
            text: 'Select Bacon',
            handler: function () {
                Ext.getCmp('checkbox3').setValue(true);
            }
        },
        '-',
        {
            text: 'Select All',
            handler: function () {
                Ext.getCmp('checkbox1').setValue(true);
                Ext.getCmp('checkbox2').setValue(true);
                Ext.getCmp('checkbox3').setValue(true);
            }
        }, {
            text: 'Deselect All',
            handler: function () {
                Ext.getCmp('checkbox1').setValue(false);
                Ext.getCmp('checkbox2').setValue(false);
                Ext.getCmp('checkbox3').setValue(false);
            }
        }],
        renderTo: Ext.getBody()
    });
});
