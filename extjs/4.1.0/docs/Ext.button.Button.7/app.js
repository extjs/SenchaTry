Ext.onReady(function() {
    Ext.create('Ext.Button', {
        text: 'Button',
        renderTo: Ext.getBody(),
        listeners: {
            click: function() {
                // this == the button, as we are in the local scope
                this.setText('I was clicked!');
            },
            mouseover: function() {
                // set a new config which says we moused over, if not already set
                if (!this.mousedOver) {
                    this.mousedOver = true;
                    alert('You moused over a button!\n\nI wont do this again.');
                }
            }
        }
    });
});
