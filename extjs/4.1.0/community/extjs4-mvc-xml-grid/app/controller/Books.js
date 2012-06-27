Ext.define('ExtMVC.controller.Books', {
    extend: 'Ext.app.Controller',

    stores: ['Books'],

    models: ['Book'],

    views: ['book.BookGrid'],

    init: function() {
        
    }
});
