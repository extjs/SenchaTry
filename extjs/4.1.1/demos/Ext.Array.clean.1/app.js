/*global Ext:false */
Ext.application({
    name: 'Ext.Array.clean()',
    launch: function() {
        /* Create two arrays. The 'dirty' array contains empty items.
           The 'clean' array filters empty items using the static 
           Ext.Array.clean() method. */
        var dirty = [1,2,,,4,5,6,7,,,11],
            clean = Ext.Array.clean(dirty);
        
        /* Create a panel to display the output. */
        Ext.create('Ext.Panel', {
            id: 'pan',
            title: 'Ext.Array.clean() example',
            height: 200,
            bodyPadding: 10,
            padding: 20,
            html: '<p><code>dirty</code> array (' + dirty.length + ' items): ' + JSON.stringify(dirty) + '</p>' + '<p><code>clean</code> array (' + clean.length + ' items): ' + JSON.stringify(clean) + '</p>',
            renderTo: Ext.getBody()
        }); // Ext.create()
    } // launch
}); // Ext.application()
