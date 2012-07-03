/*global Ext:false */
Ext.onReady(function () {
    // A simple subclass of Base that creates a HTML5 search field. Redirects to the
    // searchUrl when the Enter key is pressed.222
    Ext.define('Ext.form.SearchField', {
        extend: 'Ext.form.field.Base',
        alias: 'widget.searchfield',

        inputType: 'search',

        // Config defining the search URL
        searchUrl: 'http://www.google.com/search?q={0}',

        // Add specialkey listener
        initComponent: function () {
            this.callParent();
            this.on('specialkey', this.checkEnterKey, this);
        },

        // Handle enter key presses, execute the search if the field has a value
        checkEnterKey: function (field, e) {
            var value = this.getValue();
            if (e.getKey() === e.ENTER && !Ext.isEmpty(value)) {
                location.href = Ext.String.format(this.searchUrl, value);
            }
        }
    });

    Ext.create('Ext.form.Panel', {
        title: 'Base Example',
        bodyPadding: 5,
        width: 250,

        // Fields will be arranged vertically, stretched to full width
        layout: 'anchor',
        defaults: {
            anchor: '100%'
        },
        items: [{
            xtype: 'searchfield',
            fieldLabel: 'Search',
            name: 'query'
        }],
        renderTo: Ext.getBody()
    });
});
