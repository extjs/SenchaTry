/**
 * @author Andrea Cammarata (@AndreaCammarata)
 * @class RSS.tux.util.Url
 * @singleton
 * Class which define some usefull function that allows
 * the application to handle the current application url
 * to improve the support of history and deep linking features.
 */
Ext.define('RSS.tux.util.Url',{
    
    singleton: true,
    
    alternateClassName: 'url',
    
    /**
     * Prettify the specified url deleting all the specials
     * chars to convert it in a more search engines friendly format.
     * @param {String} url The url that neeeds to be converted.
     * @return {String} The url converted in a friendly format.
     */
    prettify: function(url){
        return url.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase();
    },

    /**
     * Simply replace the url hash to the one specified.
     * This will allow the application to improve the support
     * of history and deep linking features.
     * @param {String} url The new url hash to set.
     */
    browseTo: function(url){
        window.location.hash = url;
    },

    /**
     * Get the requested url hash path index.
     * @param {Number} index The url hash path index to retrive.
     * @return {String} The url Hash path requested.
     */
    getPath: function(index){
        return window.location.hash.replace('#','').split('/')[index].replace('.html', '');
    },

    /**
     * Get the previous url hash path.
     * @return The previous url hash path.
     */
    getPrevPath: function(){
        var url = window.location.hash,
            lastIndex = url.lastIndexOf('/');
        return url.substr(0, lastIndex);
    },

    /**
     * Move the browser to the prevous url hash path.
     */
    up: function(){
        this.browseTo(this.getPrevPath() + '.html');
    }
    
});
