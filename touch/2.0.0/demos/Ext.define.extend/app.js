Ext.application({
    launch: function () {
        Ext.define('MyToolbar', {
            extend: 'Ext.Toolbar',
            alias: 'widget.mytoolbar',
            config: {
                items: [{
                    text: 'Red',
                    action: 'red'
                }, {
                    text: 'Orange',
                    action: 'orange'
                }, {
                    text: 'Yellow',
                    action: 'yellow'
                }, {
                    text: 'Green',
                    action: 'green'
                }, {
                    text: 'Blue',
                    action: 'blue'
                }], // items
                control: {
                    'button[action=red]': {
                        tap: 'onButtonTap'
                    },
                    'button[action=orange]': {
                        tap: 'onButtonTap'
                    },
                    'button[action=yellow]': {
                        tap: 'onButtonTap'
                    },
                    'button[action=green]': {
                        tap: 'onGreenTap'
                    },
                    'button[action=blue]': {
                        tap: 'onBlueTap'
                    }
                } // control
            }, // config
            onButtonTap: function (btn) {
                Ext.Msg.alert('You clicked the ' + btn.getText() + ' button');
            },
            onGreenTap: function (btn) {
                Ext.Msg.alert('Custom Green handler');
            },
            onBlueTap: function (btn) {
                Ext.Msg.alert('Le Custom Blue handler');
            } 
        }); // define()
        
        Ext.create('Ext.Container', {
            fullscreen: true,
            items: [{
                xtype: 'mytoolbar',
                docked: 'top'
            }] // items
        }); // create()
    } // launch
}); // application()
