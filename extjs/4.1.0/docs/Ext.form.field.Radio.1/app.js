/*global Ext:false */
Ext.onReady(function() {
    Ext.create('Ext.form.Panel', {
        title: 'Order Form',
        width: 300,
        bodyPadding: 10,
        renderTo: Ext.getBody(),
        items: [{
            xtype: 'fieldcontainer',
            fieldLabel: 'Size',
            defaultType: 'radiofield',
            defaults: {
                flex: 1
            },
            layout: 'hbox',
            items: [{
                boxLabel: 'M',
                name: 'size',
                inputValue: 'm',
                id: 'radio1'
            }, {
                boxLabel: 'L',
                name: 'size',
                inputValue: 'l',
                id: 'radio2'
            }, {
                boxLabel: 'XL',
                name: 'size',
                inputValue: 'xl',
                id: 'radio3'
            }]
        }, {
            xtype: 'fieldcontainer',
            fieldLabel: 'Color',
            defaultType: 'radiofield',
            defaults: {
                flex: 1
            },
            layout: 'hbox',
            items: [{
                boxLabel: 'Blue',
                name: 'color',
                inputValue: 'blue',
                id: 'radio4'
            }, {
                boxLabel: 'Grey',
                name: 'color',
                inputValue: 'grey',
                id: 'radio5'
            }, {
                boxLabel: 'Black',
                name: 'color',
                inputValue: 'black',
                id: 'radio6'
            }]
        }],
        bbar: [{
            text: 'Smaller Size',
            handler: function() {
                var radio1 = Ext.getCmp('radio1'),
                    radio2 = Ext.getCmp('radio2'),
                    radio3 = Ext.getCmp('radio3');

                //if L is selected, change to M
                if (radio2.getValue()) {
                    radio1.setValue(true);
                    return;
                }

                //if XL is selected, change to L
                if (radio3.getValue()) {
                    radio2.setValue(true);
                    return;
                }

                //if nothing is set, set size to S
                radio1.setValue(true);
            }
        }, {
            text: 'Larger Size',
            handler: function() {
                var radio1 = Ext.getCmp('radio1'),
                    radio2 = Ext.getCmp('radio2'),
                    radio3 = Ext.getCmp('radio3');

                //if M is selected, change to L
                if (radio1.getValue()) {
                    radio2.setValue(true);
                    return;
                }

                //if L is selected, change to XL
                if (radio2.getValue()) {
                    radio3.setValue(true);
                    return;
                }

                //if nothing is set, set size to XL
                radio3.setValue(true);
            }
        }, '-',
        {
            text: 'Select color',
            menu: {
                indent: false,
                items: [{
                    text: 'Blue',
                    handler: function() {
                        var radio = Ext.getCmp('radio4');
                        radio.setValue(true);
                    }
                }, {
                    text: 'Grey',
                    handler: function() {
                        var radio = Ext.getCmp('radio5');
                        radio.setValue(true);
                    }
                }, {
                    text: 'Black',
                    handler: function() {
                        var radio = Ext.getCmp('radio6');
                        radio.setValue(true);
                    }
                }]
            }
        }]
    });
});
