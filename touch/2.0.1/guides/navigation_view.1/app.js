/*global Ext:false */
Ext.application({
    launch: function() {
        //create the navigation view and add it into the Ext.Viewport
        var view = Ext.Viewport.add({
            xtype: 'navigationview',

            //we only give it one item by default, which will be the only item in the 'stack' when it loads
            items: [{
                //items can have titles
                title: 'Navigation View',
                padding: 10,

                //inside this first item we are going to add a button
                items: [{
                    xtype: 'button',
                    text: 'Push another view!',
                    handler: function() {
                        //when someone taps this button, it will push another view into stack
                        view.push({
                            //this one also has a title
                            title: 'Second View',
                            padding: 10,

                            //once again, this view has one button
                            items: [{
                                xtype: 'button',
                                text: 'Pop this view!',
                                handler: function() {
                                    //and when you press this button, it will pop the current view (this) out of the stack
                                    view.pop();
                                }
                            }]
                        });
                    }
                }]
            }]
        });
    }
});
