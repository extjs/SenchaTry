/*global Ext:false */
Ext.onReady(function() {
    Ext.create('Ext.Button', {
        text: 'Dynamic Handler Button',
        renderTo: Ext.getBody(),
        handler: function() {
            // this button will spit out a different number every time you click it.
            // so firstly we must check if that number is already set:
            if (this.clickCount) {
                // looks like the property is already set, so lets just add 1 to that number and alert the user
                this.clickCount++;
                alert('You have clicked the button "' + this.clickCount + '" times.\n\nTry clicking it again..');
            } else {
                // if the clickCount property is not set, we will set it and alert the user
                this.clickCount = 1;
                alert('You just clicked the button for the first time!\n\nTry pressing it again..');
            }
        }
    });
});
