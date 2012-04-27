Ext.onReady(function() {
    Ext.Msg.show({
        title: 'Save Changes?',
        msg: 'You are closing a tab that has unsaved changes. Would you like to save your changes?',
        buttons: Ext.Msg.YESNOCANCEL,
        icon: Ext.Msg.QUESTION
    });
});