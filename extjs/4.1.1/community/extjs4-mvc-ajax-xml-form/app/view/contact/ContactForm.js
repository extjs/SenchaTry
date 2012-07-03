Ext.define('ExtMVC.view.contact.ContactForm' ,{
    extend: 'Ext.form.Panel',
    alias : 'widget.contactform',

    frame: true,
    title:'XML Form',
    bodyPadding: 5,
    waitMsgTarget: true,

    fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 85,
            msgTarget: 'side'
     },

    items: [{
        xtype: 'fieldset',
        title: 'Contact Information',
        defaultType: 'textfield',
        defaults: {
            width: 280
        },
        items: [{
                fieldLabel: 'First Name',
                emptyText: 'First Name',
                name: 'first'
            }, {
                fieldLabel: 'Last Name',
                emptyText: 'Last Name',
                name: 'last'
            }, {
                fieldLabel: 'Company',
                name: 'company'
            }, {
                fieldLabel: 'Email',
                name: 'email',
                vtype:'email'
            }, {
                xtype: 'combobox',
                fieldLabel: 'State',
                name: 'state',
                store: 'States',
                valueField: 'abbr',
                displayField: 'state',
                typeAhead: true,
                queryMode: 'local',
                emptyText: 'Select a state...'
            }, {
                xtype: 'datefield',
                fieldLabel: 'Date of Birth',
                name: 'dob',
                allowBlank: false,
                maxValue: new Date()
            }
        ]
    }],

    buttons: [{
        text: 'Load',
        action: 'load'
    }, {
        text: 'Submit',
        disabled: true,
        formBind: true,
        action: 'submit'
    }]
    
 });   
