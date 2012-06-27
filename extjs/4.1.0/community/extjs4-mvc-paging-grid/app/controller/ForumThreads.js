Ext.define('ExtMVC.controller.ForumThreads', {
    extend: 'Ext.app.Controller',

    stores: ['ForumThreads'],

    models: ['ForumThread'],

    views: ['forumThread.ForumThreadGrid'],

    init: function() {
        this.control({
            'forumthreadgrid button[action=showPreview]': {
                toggle: this.showPreview
            }
        }); 
    },

    showPreview: function(btn, pressed){
        
        var preview = Ext.ComponentQuery.query('forumthreadgrid dataview')[0].plugins[0];
        
        preview.toggleExpanded(pressed);
    }
});
