/*global Ext:false */
Ext.onReady(function () {
    // display a dropdown menu:
    Ext.create('Ext.button.Split', {
        renderTo: Ext.getBody(),
        text: 'Options',
        // handle a click on the button itself
        handler: function () {
            alert("The button was clicked");
        },
        menu: new Ext.menu.Menu({
            items: [
            // these will render as dropdown menu items when the arrow is clicked:
            {
                text: 'Item 1',
                handler: function () {
                    alert("Item 1 clicked");
                }
            }, {
                text: 'Item 2',
                handler: function () {
                    alert("Item 2 clicked");
                }
            }]
        })
    });
});
