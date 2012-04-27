Ext.application({
    launch: function() {
        Ext.create('Ext.Container', {
            fullscreen: true,
            layout: {
                type: 'vbox',
                pack: 'center'
            },
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                title: 'Ext.Audio'
            }, {
                xtype: 'toolbar',
                docked: 'bottom',
                defaults: {
                    xtype: 'button',
                    handler: function() {
                        var container = this.getParent().getParent(),
                            // use ComponentQuery to get the audio component (using its xtype)
                            audio = container.down('audio');

                        audio.toggle();
                        this.setText(audio.isPlaying() ? 'Pause' : 'Play');
                    }
                },
                items: [{
                    text: 'Play',
                    flex: 1
                }]
            }, {
                html: 'Hidden audio!',
                styleHtmlContent: true
            }, {
                xtype: 'audio',
                hidden: true,
                url: 'touch/examples/audio/crash.mp3'
            }]
        });
    }
});