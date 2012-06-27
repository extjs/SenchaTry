/**
 * @author Andrea Cammarata (@AndreaCammarata)
 * @class RSS.model.News
 * @extends Ext.data.Model
 * Model which contains all the information related
 * to a single Feed News.
 */
Ext.define('RSS.model.News', {
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'titleRewrite',
        fields: [
            { name: 'author',         type: 'string' },
            { name: 'publishedDate',  type: 'date'   },
            { name: 'title',          type: 'string' },
            { name: 'link',           type: 'string' },
            { name: 'content',        type: 'string' },
            { name: 'contentSnippet', type: 'string' },
            { name: 'titleRewrite',   type: 'string' ,    convert: function(v, record){
    
                /* This field will contains the news title value
                 * converted in a prettify format. */
                return url.prettify(record.get('title'));
        
            }},
            { name: 'friendlyDate',   type: 'string' ,    convert: function(v, record){
                    
                /* this field will contains the news published date
                 * converted in a more friendly format. */
                var date = record.get('publishedDate'),
                    pf = date.getHours() > 12 ? 'PM' : 'AM';
        
                return Ext.Date.format(date, 'Y/m/d') + ', ' + 
                       Ext.Date.format(date, 'h:i') + pf;

            }}
        ]
    }
});
