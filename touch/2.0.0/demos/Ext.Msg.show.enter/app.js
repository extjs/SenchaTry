Ext.application({
    launch: function () {
        Ext.create('Ext.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'titlebar',
                dock: 'top',
                items: [{
                    text: '<code>enter/exit:left</code>',
                    handler: function () {
                        showAlert('left', 'left');
                    } // handler
                }, {
                    text: '<code>enter/exit:right</code>',
                    handler: function () {
                        showAlert('right', 'right');
                    } // handler
                }, {
                    text: '<code>enter/exit:top</code>',
                    handler: function () {
                        showAlert('top', 'top');
                    } // handler
                }, {
                    text: '<code>enter/exit:bottom</code>',
                    handler: function () {
                        showAlert('bottom', 'bottom');
                    } // handler
                }] // items
            }] // items
        }); // create()
        
        function showAlert(enterPos, exitPos) {
            Ext.Msg.show({
                title: 'enter: ' + enterPos + ", exit: " + exitPos,
                showAnimation: 'slideIn',
                hideAnimation: 'slideOut',
                enter: enterPos,
                exit: exitPos
            }); // show()
        } // showAlert()
    } // launch
}); // application()
