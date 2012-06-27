/**
 * @author Andrea Cammarata (@AndreaCammarata)
 * @class RSS.controller.Feeds
 * @extends Ext.app.Controller
 * Core controllers which handles all the
 * Feeds and News routes and views.
 * This class could be considered as the real application Engine.
 */
Ext.define('RSS.controller.Feeds', {
    
    extend: 'Ext.app.Controller',

    config: {
    
        /* Definition of all the routes handled
         * by the controller. */
        routes: {
                
            //The user request to display the available Feeds
            '': 'showFeeds',
            'feeds.html': 'showFeeds',

            //The user request to add a new Feed
            'feeds/add.html': 'showFeedConfig',    

            /* The user request to show all the 
             * availables News associated to the selected :feed */
            'feeds/:feed.html': 'showFeedNews',

            //The user request to edit the a :feed configuration
            'feeds/:feed/edit.html': 'editFeed',

            /* The user request to read the :news
             * retrived by the selected :feed  */
            'feeds/:feed/:news.html': 'readNews'

        },

        //Definition of all the controller references.
        refs: {
    
            //Reference to the Feed List Dataview
            feedList: {
                xtype: 'feedlist',
                selector: 'feedlist',
                autoCreate: true
            },
            //Reference to the New / Edit Feed view
            newFeedView: {
                xtype: 'newfeed',
                selector: 'newfeed',
                autoCreate: true
            },
            //Reference to the News List view
            newsList: {
                xtype: 'newslist',
                selector: 'newslist',
                autoCreate: true
            },
            //Reference to the News List container view
            newsContainer: {
                xtype: 'newscontainer',
                selector: 'newscontainer',
                autoCreate: true
            },

            //Toolbar defined inside the Feed Configuration View
            toolbarFeedConfig: '#tbrFeedConfig',

            //Save Feed button defined inside the Feed Configuration View
            saveFeedBtn: 'button[action=savefeed]',

            //Delete Feed button defined inside the Feed Configuration View
            deleteFeedBtn: 'button[action=deletefeed]',

            //Move to Previous News defined inside the NewsContainer View
            prevNewsButton: 'button[action=prevnews]',
    
            //Move to Next News defined inside the NewsContainer View
            nextNewsButton: 'button[action=nextnews]'

        },
        control: {
            'button[navigation=true]': {
                tap: 'changeViewportAnimation'
            },
            'dataview': {
                itemtap: 'changeViewportAnimation'
            },
            'button[action=addfeed]': {
                tap: 'rtAddFeed'
            },
            'button[action=showfeeds]': {
                tap: 'rtShowFeeds'
            },
            'button[action=shownews]': {
                tap: 'rtShowNews'
            },
            'button[action=readmore]': {
                tap: 'onReadMore'
            },
            feedsBtn: {
                tap: 'rtShowFeeds'
            },
            saveFeedBtn: {
                tap: 'saveFeed'
            },
            deleteFeedBtn: {
                tap: 'deleteFeed'
            },
            prevNewsButton: {
                tap: 'moveToNews'
            },
            nextNewsButton: {
                tap: 'moveToNews'
            },
            feedList: {
                itemtap: 'rtViewFeed',
                feededit: 'rtEditFeed'
            },
            newslist: {
                itemtap: 'rtReadNews'
            },
            newsContainer: {
                activeitemchange: 'onCardChange'
            }
        }
    },

    newsIndex: 0,

    /**
     * Controller initialization function.
     * @private
     */
    init: function() {

        /* Listening for the Viewpor activeitemchange event to be able to
         * destroy the old cards when these are not longer visibles
         * on the device screen to improve the application performances. */
        Ext.Viewport.on('activeitemchange', this.onCardChange, this);

    },
    
    /**
     * Function called when the Viewport and the NewsContainer containers
     * change their active card.
     * This will allow the application to destroy the old cards
     * to keep the DOM clear from invisible components and improve
     * the application performances.
     * @param {Ext.layout.Card} view The view instance.
     * @param {Mixed} newActiveItem The new active item.
     * @param {Mixed} oldActiveItem The old active item.
     */
    onCardChange: function(view, newActiveItem, oldActiveItem){
    
        if(oldActiveItem){
            oldActiveItem.on('hide', oldActiveItem.destroy);
        }

    },

    /**
     * Ask to change the current Viewport animation.
     * @param {Ext.Component} component The component who called this function.
     */
    changeViewportAnimation: function(component){

        /* If this function has been called by a button, then will be established
         * the animation reverse configuration by its ui */
        if(component instanceof Ext.Button){
    
            this.doChangeViewportAnimation(component.config.ui === 'back' ? true : false);

        /* Otherwise this function is called by an Ext.DataView so the reverse
         * attribute should always be false */
        }else{
    
            this.doChangeViewportAnimation(false);

        }
    },

    /**
     * Change the Viewport animation.
     * @param {Boolean} reverse The reverse layout annimation attribute.
     */
    doChangeViewportAnimation: function(reverse){
    
        Ext.Viewport.getLayout().setAnimation({
            type: 'slide',
            reverse: reverse
        });
    
    },

    /**
     * Display the DataView which contains all the Feeds
     * handled by the application.
     */
    showFeeds: function(){
       
        Ext.Viewport.setActiveItem(this.getFeedList());    
    
    },
    
    /**
     * Display the View which allow the user the edit
     * the selected feed configuration.
     */
    showFeedConfig: function(){
    
        Ext.Viewport.setActiveItem(this.getNewFeedView());
        this.getToolbarFeedConfig().setTitle('Add Feed');
    
    },

    /**
     * Change the application url hash to bring the application
     * to the Add Feed view.
     */
    rtAddFeed: function(){
    
        //Routed to "showFeedConfig" function
        url.browseTo('#feeds/add.html');
    
    },

    /**
     * Change the application url hash to bring the application
     * to the Show Feeds view.
     */
    rtShowFeeds: function(){
    
        //Routed to "showFeeds" function
        url.browseTo('#feeds.html');
    
    },

    /**
     * Change the application url hash to bring the application
     * to the Show News view.
     */
    rtShowNews: function(){
    
        //Going back with the Url Path
        url.up();
    
    },

    /**
     * Tap function called when the user tap on the Edit feed button.
     * @param {String} feed The friendly Feed name of the feed to edit.
     */
    editFeed: function(feed){
    
        var me = this,

            //Getting the record associated to the feed to edit
            record = Ext.getStore('Feeds').findRecord('nameRewrite', feed);
        
        //Check if the application handle the requested Feed
        if(record){
    
            //Calling the function that display the Feed configuration
            me.showFeedConfig();

            //Change the Toolbar title with the requested Feed name
            me.getToolbarFeedConfig().setTitle(record.get('name'));

            //Showing the Delete Feed button
            me.getDeleteFeedBtn().show();

            //Loading the requested Feed record inside the form panel
            me.getNewFeedView().setRecord(record);

        /* Otherwise the requested Feed is not handled
         * by the application so it can not be edited. */
        }else{
        
            //Showing a warning message
            Ext.Msg.alert('Feed not found', 'The feed requested has not been found!');

            /* Calling the function which will change the application url hash to
             * bring the user back to the feeds list. */
            me.rtShowFeeds();
        }
    
    },

    /**
     * Show the views that allows the user to read the requested Feed News.
     * @param {String} feed The friendly Feed name of the news feed.
     * @param {String} news The friendly News title of the news to read.
     */
    readNews: function(feed, news){
    
        //Checking if the routing has been temporarily disabled
        if(!this.disableRouting){
    
            var me = this,

                //Getting the record associated to the requested News Feed
                feedRecord = Ext.getStore('Feeds').findRecord('nameRewrite', feed);

                //Getting the index associated to the requested News
                newsIndex = Ext.getStore('News').find('titleRewrite', news);
    
            //Checking if the requested Feed is handled by the application
            if(feedRecord){
            
                //Checking if the requested News is available
                if(newsIndex >= 0){
    
                    /* The news is available so will be called the function
                     * that will display the requested news. */
                    me.doReadNews(newsIndex);
    
                //Otherwise the requested News is not available so...
                }else{
    
                    //Let's check if the News store is empty
                    if(Ext.getStore('News').getCount() == 0){
        
                        /* The Store is empty so it needs to be filled reading the News
                         * from the requested Feed. This happens when the user wants to read
                         * a News directly using a deep linking Url. In this case the store has
                         * still not be loaded so this is the right moment to do it, and, when
                         * the load is completed, let's call the readNews function that will
                         * display the requested news. */
                        me.showFeedNews(feed, Ext.bind(me.readNews, me, [feed, news]), false);
            
                    }else{
                
                        //Showing a warning message
                        Ext.Msg.alert('News not found', 'The News requested has not been found!');
        
                        /* Calling the function which will change the application url hash to
                         * bring the user back to the feeds list. */
                        me.rtShowFeeds();
            
                    }
    
                }

            }else{
            
                //Showing a warning message
                Ext.Msg.alert('Feed not found', 'The feed requested has not been found!');

                /* Calling the function which will change the application url hash to
                 * bring the user back to the feeds list. */
                me.rtShowFeeds();
            
            }
            
        }
        
        //Enabling again the routing
        this.disableRouting = false;
    
    },
    
    /**
     * Retrive all the news contained inside a Feed.
     * @param {String} feed The Feed name.
     * @param {Function} callback The callback function to call when the news are loaded.
     * @param {Boolean} showView True if the News view should be set as active inside the viewport.
     * @private
     */
    showFeedNews: function(feed, callback, showView){
    
        //Getting the News store
        var store = Ext.getStore('News'),
            
            //Getting the record associated to the requested feed (if any)
            record = Ext.getStore('Feeds').findRecord('nameRewrite', feed),

            //Getting the News store proxy
            proxy = store.getProxy(),
    
            //Display the News View by default
            showView = Ext.isDefined(showView) ? showView : true,

            //Getting the current News proxy Url
            oldUrl = proxy.getUrl(),
    
            newUrl;

        /* Checking if the requested feed is currently
         * handed by the application. */
        if(record){
        
            //Getting the new requested Feed Url
            newUrl = record.get('url');

            /* Checking if the new requested url is different form the previous
             * one because, if not, the store already has the requested news loaded. */ 
            if(newUrl !== oldUrl){
            
                //Removing all the previous loaded news
                store.removeAll();
            
                //Updating the feed url
                proxy.setUrl(newUrl);

                //Loading the news from the selected feed
                store.load({
                    callback: callback ? callback : Ext.emtpyFn,
                    scope: this
                });
            
            }
            
            /* If the News view should be displayed, then will be set
             * as the active one inside the viewport. */
            if(showView){
                Ext.Viewport.setActiveItem(this.getNewsList());
            }
            
        }
    
    },

    /**
     * Tap function called when the user tap on the Save Feed button.
     * @private
     */
    saveFeed: function(){
    
        //Getting the Feeds store
        var store = Ext.getStore('Feeds'),

            //Getting the record loaded inside the form (if any)
            record = this.getNewFeedView().getRecord(),

            //Creating the new feed Record
            feed = Ext.create('RSS.model.Feed', this.getNewFeedView().getValues()),

            //Validation the feed and get the errors if any
            errors = feed.validate();
   
        //The feed is not valid
        if(!errors.isValid()){
            
            //Showing the validation error
            Ext.Msg.alert('Feed Invalid', Ext.String.format('The field "{0}" {1}.', errors.first().getField(), errors.first().getMessage()));

            //The feed will not be saved
            return;
        }
        
        /* If the form contains a record, this means that the user
         * is updating a feed and not adding a new one, so the old one
         * already loaded in the form have to be deleted. */
        if(record !== null){
            store.remove(record);
        }  
        
        //The new feed record is added to the store
        store.add(feed);
    
        /* Calling the function which will change the application url hash to
         * bring the user back to the feeds list. */
        this.rtShowFeeds();
    
    },

    /**
     * Tap function called when the user tap on the Delete Feed button.
     * @private
     */
    deleteFeed: function(){

       //Asking a confirmation to the user
       Ext.Msg.confirm('Delete Feed', 'Are you sure you want to delete this feed?', function(btn){

            //The user rally wants to delete the feed
            if(btn == 'yes'){
            
                //Removing the selected feed from the store
                Ext.getStore('Feeds').remove(this.getNewFeedView().getRecord());
        
                /* Calling the function which will change the application url hash to
                 * bring the user back to the feeds list. */
                this.rtShowFeeds();
        
            }
        
        }, this);
    
    },

    /**
     * Function associated to the "feededit" event fired by the custom
     * dataview component when the user tap on the edit feed button
     * from the list of the available ones.
     * @param {Ext.dataview.DataView} dataview The Dataview component.
     * @param {Ext.tux.dataview.FeedListItem} item The custom dataview item component.
     * @param {RSS.model.Feed} record The selected Feed record
     * @private
     */
    rtEditFeed: function(list, item, record){
        
        //Routed to "showFeedNews" function
        url.browseTo(Ext.String.format('#feeds/{0}/edit.html', record.get('nameRewrite')));
        
    },

    /**
     * ItemTap function called when the user select a feed
     * from the list of the available ones.
     * @param {Ext.dataview.DataView} dataview The Dataview component.
     * @param {Number} index The index of the item tapped.
     * @param {Ext.Element/Ext.dataview.component.DataItem} target The element or DataItem tapped.
     * @param {RSS.model.Feed} record The selected Feed record.
     * @private
     */
    rtViewFeed: function(dataview, index, target, record){
    
        //Routed to "showFeedNews" function
        url.browseTo(Ext.String.format('#feeds/{0}.html', record.get('nameRewrite')));
        
    },
    
    /**
     * ItemTap function called when the user select a news to read.
     * @param {Ext.dataview.DataView} dataview The Dataview component.
     * @param {Number} index The index of the item tapped.
     * @param {Ext.Element/Ext.dataview.component.DataItem} target The element or DataItem tapped.
     * @param {RSS.model.News} record The selected News record.
     * @private
     */
    rtReadNews: function(dataview, index, target, record){
            
        //Getting the feed url from the previous Hash path
        var feed = url.getPath(1);

        //Routed to "readNews" function
        url.browseTo(Ext.String.format('#feeds/{0}/{1}.html', feed, record.getId()));
        
    },

    /**
     * Tap function called when the previous or next button are pressed.
     * @param {Ext.Button} btn The tap button.
     * @private
     */
    moveToNews: function(btn){
    
        var direction = btn.config.direction,
            index = direction === 'past' ? --this.newsIndex : ++this.newsIndex;
  
        this.doReadNews(index, direction);
    
    },

    /**
     * Show the view that allows the user to read the selected news, simulating
     * an Apple TimeMachine effect transition.
     * @param {Number} index The feed news index to read.
     * @param {String} direction If the news to read has a earlier date than the current one, 
     * the direction will be "past" otherwise "future".
     * @return {RSS.view.News} The view which is going to contains the news content.
     * @private
     */
    doReadNews: function(index, direction){

        var me = this,

            //Getting the news container
            newsContainer = me.getNewsContainer(),

            //Getting the News store
            store = Ext.getStore('News'),

            //Getting the request news
            news = store.getAt(index);

        //Updating the layout direction if not provided
        direction = Ext.isDefined(direction) ? direction : me.newsIndex > index ? 'future' : 'past';
        
        /* Chacking if is already defined the current newsIndex, because, if so,
         * this means that the user is not getting here from a deep linking url,
         * so the application needs to update the transition effect. */
        if(Ext.isDefined(me.newsIndex)){

            /* Updating the NewsContainer direction animation to simulate
             * the Apple TimeMachine effect. */
            newsContainer.getLayout().setAnimation({
                type: 'timemachine',
                direction: direction,
                duration: 1000
            });
    
        /* Otherwise the user opened a deep linking url, so there's no
         * need to simulate a transition effect because there is not
         * a previous or next view. */
        }else{
    
            newsContainer.getLayout().setAnimation(null);

        }
        
        /* The NewsContainer view will be set as the active one
         * inside the viewport */
        Ext.Viewport.setActiveItem(newsContainer);

        /* Getting the selected news view and setting it as the active one
         * inside the NewsContains view. */
        newsContainer.setActiveItem(me.getNewsView(news));

        //Saving the actual news index
        me.newsIndex = index;
        
        /* Checking if the "Previous News" button should be hidden because the user
         * is already reading the first feed news. */
        me.getPrevNewsButton().setHidden(me.newsIndex == 0);

        /* Checking if the "Next News" button should be hidden because the user
         * is already reading the last feed news. */
        me.getNextNewsButton().setHidden(me.newsIndex == store.getCount() - 1);

        //The routing will be temporarily disable
        me.disableRouting = true;

        //Replacing the application url hash to supports history browsing
        url.browseTo(Ext.String.format('{0}/{1}.html', url.getPrevPath(), news.getId()));

    },

    /**
     * Tap function called when the user tap on the "Read More"
     * button to read the news directly on the website
     * where it is hosted.
     * @param {RSS.model.News} news The record which contains all the selected news informations.
     * @return {RSS.view.News} The view which is going to contains the news content.
     * @private
     */
    getNewsView: function(news){
        
        var newsView = Ext.widget('news', {
            data: news.getData()
        });

        return newsView;

    },

    /**
     * Tap function called when the user tap on the "Read More"
     * button to read the news directly on the website
     * where it is hosted.
     * @private
     */
    onReadMore: function(){
    
        /* Warning the user that this will redirect him to an external
         * url outside the application asking him if he wants to continue. */
        Ext.Msg.confirm('Redirect', 'You are going to be redirected to an external Url.<br/>Do you want to continue?', function(btn){

            //The answered yes so...
            if(btn == 'yes'){

                //The news page is going to be open
                window.open(Ext.getStore('News').getAt(this.newsIndex).get('link'));

            }

        }, this);
    
    }

});
