Ext.define('ExtMVC.view.forumThread.ForumThreadGrid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.forumthreadgrid',
    
    requires: 'Ext.ux.PreviewPlugin',

    title : 'ExtJS.com - Browse Forums',

    disableSelection: true,

    loadMask: true,

    viewConfig: {
        id: 'gv',
        trackOver: false,
        stripeRows: false,
        plugins: [{
            ptype: 'preview',
            bodyField: 'excerpt',
            expanded: true,
            pluginId: 'preview'
        }]
    },

    // pluggable renders
    renderTopic: function(value, p, record) {
        return Ext.String.format(
            '<b><a href="http://sencha.com/forum/showthread.php?t={2}" target="_blank">{0}</a></b><a href="http://sencha.com/forum/forumdisplay.php?f={3}" target="_blank">{1} Forum</a>',
            value,
            record.data.forumtitle,
            record.getId(),
            record.data.forumid
        );
    },

    renderLast: function(value, p, r) {
        return Ext.String.format('{0}<br/>by {1}', Ext.Date.dateFormat(value, 'M j, Y, g:i a'), r.get('lastposter'));
    },

    initComponent: function() {

        this.store = 'ForumThreads';

        this.columns = [
        {
            id: 'topic',
            text: "Topic",
            dataIndex: 'title',
            flex: 1,
            renderer: this.renderTopic,
            sortable: false
        },{
            text: "Author",
            dataIndex: 'username',
            width: 100,
            hidden: true,
            sortable: true
        },{
            text: "Replies",
            dataIndex: 'replycount',
            width: 70,
            align: 'right',
            sortable: true
        },{
            id: 'last',
            text: "Last Post",
            dataIndex: 'lastpost',
            width: 150,
            renderer: this.renderLast,
            sortable: true
        }];

         // paging bar on the bottom
        this.bbar = Ext.create('Ext.PagingToolbar', {
            store: this.store,
            displayInfo: true,
            displayMsg: 'Displaying topics {0} - {1} of {2}',
            emptyMsg: "No topics to display",
            items:[
                '-', {
                xtype: 'button',    
                text: 'Show Preview',
                pressed: true,
                action: 'showPreview',
                enableToggle: true
            }]
        });

        this.callParent(arguments);
    }
 });   
