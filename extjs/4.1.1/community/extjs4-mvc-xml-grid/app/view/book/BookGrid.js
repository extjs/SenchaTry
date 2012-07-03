Ext.define('ExtMVC.view.stock.BookGrid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.bookgrid',
    
    title : 'XML Grid',
    
    initComponent: function() {
        
        this.store = 'Books';
        
        this.columns = [{
            text: "Author", 
            flex: 1, 
            dataIndex: 'Author', 
            sortable: true
        },
        {
            text: "Title", 
            width: 180, 
            dataIndex: 'Title', 
            sortable: true
        },
        {
            text: "Manufacturer", 
            width: 115, 
            dataIndex: 'Manufacturer', 
            sortable: true
        },
        {
            text: "Product Group", 
            width: 100, 
            dataIndex: 'ProductGroup', 
            sortable: true
        }];
        
        this.callParent(arguments);
    }
});    
