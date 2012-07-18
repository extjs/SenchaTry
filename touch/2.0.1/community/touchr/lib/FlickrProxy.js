Ext.define('Ext.data.proxy.Flickr', {
    extend: 'Ext.data.proxy.JsonP',
    requires: ['Ext.XTemplate'],
    alias: 'proxy.flickr',

    apiKey: 'fa506cef10772542a871ec26351defbd',
    autoAppendParams: false,
    queries: {
        featured: Ext.create('Ext.XTemplate', [
            'select * from flickr.photos.interestingness(20) where api_key="{api_key}"'
        ]),
        
        search: Ext.create('Ext.XTemplate', [
            'select * from flickr.photos.search where text="{query}" and api_key="{api_key}"'
        ]),
        
        photoByUser: Ext.create('Ext.XTemplate', [
            'SELECT * FROM flickr.people.publicphotos(0,20) WHERE user_id in ',
            '(SELECT id FROM flickr.people.findbyusername WHERE username="{user_name}" and api_key="{api_key}")',
            ' and api_key="{api_key}"'
        ])
    },
    
    config: {
        url: 'http://query.yahooapis.com/v1/public/yql',
        query: null
    },
    
    buildRequest: function(operation) {
        var me          = this,
            request     = me.callParent(arguments),
            queryTpl    = me.queries[me.getQuery()],
            filters     = operation.getFilters() || [],
            params      = request.getParams(),
            filterData  = {api_key: this.apiKey};

        Ext.iterate(filters, function(filter) {
            filterData[filter.getProperty()] = filter.getValue();
        });

        delete params.filters;

        Ext.applyIf(params, {
            format: 'json',
            q: queryTpl.applyTemplate(filterData)
        });

        request.setParams(params);
        request.setUrl(Ext.urlAppend(request.getUrl(), Ext.urlEncode(params)));
        return request;
    }
});