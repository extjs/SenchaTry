/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    xtype: 'segmentedbutton',
                    items: [{
                        text: 'left',
                        pressed: true
                    }, {
                        text: 'center'
                    }, {
                        text: 'right'
                    }, {
                        text: 'justify'
                    }], // items
                    listeners: {
                        toggle: function (segBtn, btn, isPressed) {
                            Ext.Msg.alert('Ext.SegmentedButton toggle:',
                                btn.config.text + ' (pressed:' + isPressed + ')');
                        } // toggle
                    } // listeners
                }] // items
            }] // items 
        }); // create(panel)
    } // launch
}); // application()
