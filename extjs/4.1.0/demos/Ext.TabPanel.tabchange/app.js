/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.TabPanel', {
        listeners: {
            tabchange: function(panel, newTab, oldTab) {
                Ext.getCmp('activeTabLbl').setText(newTab.title);
            } // tabchange
        }, // listeners
        items: [{
            title: 'Ext JS',
            html: 'A bunch of Ext JS examples'
        }, {
            title: 'Sencha Touch',
            html: 'A bunch of Sencha Touch examples'
        }, {
            title: 'Ext Designer',
            html: 'A bunch of Ext Designer examples'
        }, {
            title: 'Sencha Animator',
            html: 'A bunch of Sencha Animator examples'
        }, {
            title: 'Sencha.io',
            html: 'A bunch of Sencha.io examples'
        }], // items
        bbar: [
            {html:'Selected tab:', xtype:'label'},
            {id:'activeTabLbl', xtype:'label', style:'font-weight:bold;'}
        ], // bbar
        height: 100,
        renderTo: Ext.getBody()
    }); // create()
}); // onReady()
