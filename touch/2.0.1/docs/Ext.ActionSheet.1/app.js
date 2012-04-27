Ext.application({
    launch: function() {
        var actionSheet = Ext.create('Ext.ActionSheet', {
            items: [{
                text: 'Delete draft',
                ui: 'decline'
            }, {
                text: 'Save draft'
            }, {
                text: 'Cancel',
                ui: 'confirm'
            }]
        });

        Ext.Viewport.add(actionSheet);
        actionSheet.show();
    }
});