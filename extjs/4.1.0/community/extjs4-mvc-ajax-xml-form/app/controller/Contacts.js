Ext.define('ExtMVC.controller.Contacts', {
    extend: 'Ext.app.Controller',

    models: ['Contact', 'FieldError', 'State'],

    stores: ['States'],

    views: ['contact.ContactForm'],

    refs: [{
        ref: 'contactForm',
        selector: 'contactform'
    }],

    init: function() {
        
        this.control({
            'contactform button[action=load]': {
                click: this.loadFormData
            },
            'contactform button[action=submit]': {
                click: this.submitFormData
            }
        });
    },

    loadFormData: function() {

        this.getContactForm().getForm().load({
            url: 'data/xml-form-data.xml',
            waitMsg: 'Loading...'
        });
    },
    
    submitFormData: function() {

        this.getContactForm().getForm().submit({
            url: 'data/xml-form-errors.xml',
            submitEmptyText: false,
            waitMsg: 'Saving Data...',

            success: function(form, action) {
               Ext.Msg.alert('Success', action.result.msg);
            },
            failure: function(form, action) {
                Ext.Msg.alert('Failed', action.result ? action.result.msg : 'No response');
            }
        });
    }   
});
