/**
 * @author Andrea Cammarata (@AndreaCammarata)
 * @class RSS.tux.data.proxy.FeedBurner
 * @extends Ext.data.proxy.JsonP
 * Custom FeedBurner JsonP proxy.
 */
Ext.define('RSS.tux.data.proxy.FeedBurner', {
    
    extend: 'Ext.data.proxy.JsonP',

    xtype: 'feedburner',
    
    autoAppendParams: false,

    //Google JSON Feed API Url
    baseUrl: 'https://ajax.googleapis.com/ajax/services/feed/load',

    buildRequest: function(operation) {
    
        var request    = this.callParent(arguments),
            params     = request.getParams();

        Ext.applyIf(params, {
            v: '1.0',
            num: 100,
            q: request.getUrl()
        });

        request.setParams(params);
        request.setUrl(Ext.urlAppend(this.baseUrl, Ext.urlEncode(params)));

        return request;

    }
});
