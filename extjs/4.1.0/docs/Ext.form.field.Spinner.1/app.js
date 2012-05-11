/*global Ext:false */
Ext.onReady(function() {
    Ext.define('Ext.ux.CustomSpinner', {
        extend: 'Ext.form.field.Spinner',
        alias: 'widget.customspinner',

        // override onSpinUp (using step isn't neccessary)
        onSpinUp: function() {
            var me = this;
            if (!me.readOnly) {
                var val = parseInt(me.getValue().split(' '), 10) || 0; // gets rid of " Pack", defaults to zero on parse failure
                me.setValue((val + me.step) + ' Pack');
            }
        },

        // override onSpinDown
        onSpinDown: function() {
            var val, me = this;
            if (!me.readOnly) {
                val = parseInt(me.getValue().split(' '), 10) || 0; // gets rid of " Pack", defaults to zero on parse failure
                if (val <= me.step) {
                    me.setValue('Dry!');
                } else {
                    me.setValue((val - me.step) + ' Pack');
                }
            }
        }
    });

    Ext.create('Ext.form.FormPanel', {
        title: 'Form with SpinnerField',
        bodyPadding: 5,
        width: 350,
        renderTo: Ext.getBody(),
        items: [{
            xtype: 'customspinner',
            fieldLabel: 'How Much Beer?',
            step: 6
        }]
    });
});
