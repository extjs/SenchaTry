Ext.onReady(function() {
    Ext.create('Ext.fx.Animator', {
        target: Ext.getBody().createChild({
            style: {
                width: '100px',
                height: '100px',
                'background-color': 'red'
            }
        }),
        duration: 10000,
        // 10 seconds
        keyframes: {
            0: {
                opacity: 1,
                backgroundColor: 'FF0000'
            },
            20: {
                x: 30,
                opacity: 0.5
            },
            40: {
                x: 130,
                backgroundColor: '0000FF'
            },
            60: {
                y: 80,
                opacity: 0.3
            },
            80: {
                width: 200,
                y: 200
            },
            100: {
                opacity: 1,
                backgroundColor: '00FF00'
            }
        }
    });
});