/*global Ext:false */
Ext.onReady(function() {
    Ext.create('Ext.form.Panel', {
        title: 'Basic Form',
        renderTo: Ext.getBody(),
        bodyPadding: 5,
        width: 350,

        // Any configuration items here will be automatically passed along to
        // the Ext.form.Basic instance when it gets created.
        // The form will submit an AJAX request to this URL when submitted
        url: 'save-form.php',

        items: [{
            xtype: 'textfield',
            fieldLabel: 'Field',
            name: 'theField'
        }],

        buttons: [{
            text: 'Submit',
            handler: function() {
                // The getForm() method returns the Ext.form.Basic instance:
                var form = this.up('form').getForm();
                if (form.isValid()) {
                    // Submit the Ajax request and handle the response
                    form.submit({
                        success: function(form, action) {
                            Ext.Msg.alert('Success', action.result.msg);
                        },
                        failure: function(form, action) {
                            Ext.Msg.alert('Failed', action.result ? action.result.msg : 'No response');
                        }
                    });
                }
            }
        }]
    });
});
