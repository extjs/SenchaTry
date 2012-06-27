Ext.define('ExtMVC.controller.SelectController', {
    extend: 'Ext.app.Controller',

    models: ['Number'],

    stores: ['Numbers'],

    views: ['MultiSelectForm', 'ItemSelectorForm'],

    init: function() {
        
        this.control({
            'form bottombuttons button[action=clear]': {
                click: this.clearForm
            },
            'form bottombuttons button[action=reset]': {
                click: this.resetForm
            },
            'form bottombuttons button[action=save]': {
                click: this.saveForm
            },
            'form toptoolbar menuitem[action=getValue]': {
                click: this.getValue
            },
            'form toptoolbar menuitem[action=setValue]': {
                click: this.setValue
            },
            'form toptoolbar menuitem[action=enable]': {
                checkchange: this.enable
            },
            'form toptoolbar menuitem[action=delimiter]': {
                checkchange: this.delimiter
            }
        });
    },

    clearForm: function(button){
      
        var field = button.up('form').down('multiselect');
        if (!field.disabled) {
            field.clearValue();
        }
    },

    resetForm: function(button){
      
        button.up('form').getForm().reset();
    },

    saveForm: function(button){
      
        var form = button.up('form').getForm();
        form.getValues(true);
        if (form.isValid()){
            Ext.Msg.alert('Submitted Values', 'The following will be sent to the server: <br />'+
                form.getValues(true));
        }
    }, 

    getValue: function(item){
      
        var value = item.up('form').down('multiselect').getValue();
        Ext.Msg.alert('Value is a split array', value.join(', '));
    },

    setValue: function(item){
      
        var value = item.up('form').down('multiselect').setValue(['2', '3']);
    },

    enable: function(item, checked){
      
        item.up('form').down('multiselect').setDisabled(!checked);
    },

    delimiter: function(item, checked){
      
        var field = item.up('form').down('multiselect');
        if (checked) {
            field.delimiter = ',';
            Ext.Msg.alert('Delimiter Changed', 'The delimiter is now set to <b>","</b>. Click Save to ' +
                          'see that values are now submitted as a single parameter separated by the delimiter.');
        } else {
            field.delimiter = null;
            Ext.Msg.alert('Delimiter Changed', 'The delimiter is now set to <b>null</b>. Click Save to ' +
                          'see that values are now submitted as separate parameters.');
        }
    }
});
