Ext.define('TR.model.Photo', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'id', 
            'farm',
            'secret',
            'server',
            'title',
            {name: 'photo_url', convert: function(v, r){ 
                r = r.data;
                return "http://farm"+r.farm+".staticflickr.com/"+r.server+"/"+r.id+"_"+r.secret+".jpg";
            }}
        ]
    }
});
