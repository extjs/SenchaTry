Ext.onReady(function () {
    Ext.define('Ext.ux.CustomSpinner', {
        extend: 'Ext.form.field.Spinner',
        alias: 'widget.customspinner',

        // override onSpinUp (using step isn't neccessary)
        onSpinUp: function () {
            var me = this;
            if (!me.readOnly) {
                var val = me.step; // set the default value to the step value
                if (me.getValue() !== '') {
                    val = parseInt(me.getValue().slice(0, -5)); // gets rid of " Pack"
                }
                me.setValue((val + me.step) + ' Pack');
            }
        },

        // override onSpinDown
        onSpinDown: function () {
            var val, me = this;
            if (!me.readOnly) {
                if (me.getValue() !== '') {
                    val = parseInt(me.getValue().slice(0, -5)); // gets rid of " Pack"
                }
                me.setValue((val - me.step) + ' Pack');
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
