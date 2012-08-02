/*
Plugin: Ext.plugin.RememberSelection
Version: 1.0 Beta
Tested: Sencha Touch 2.0.1.1
Author: Bunchofstring (Dave Mitchell)

Requirements:
1. List must be bound to a store
2. The bound store must use a LocalStorage proxy
3. The store's model must include a "selected" field. I.e. {name:'selected',type:'boolean',defaultValue:false},

Related Notes:
1. Generally, avoid interfaces where users must select from a list of more than 7 items
2. The list must be painted before any developer-defined selection handlers will be triggered

Example:
Ext.define('Country',{
	extend:'Ext.data.Model',
	config:{
		fields:[
			{name:'name',type:'string'},
			{name:'selected',type:'boolean',defaultValue:false}
		],
		identifier:{
			type:'uuid'
		},
		proxy:{
			id:'Country',
			type:'localstorage'
		}
	},
});
Ext.create('Ext.data.Store',{
	model:'Country',
	storeId:'Country',
	proxy:{
		id:'Country',
		type:'localstorage'
	},
	autoLoad:{
		callback:function(records){
			if(Ext.isEmpty(records)){
				this.setData([
					{name:'United States'},
					{name:'Canada'},
					{name:'Mexico'}
				]);
			}
		}
	},
	autoSync:true
});
Ext.Viewport.add({
	xtype:'list',
	scrollable:true,
	itemTpl:'{name}',
	store:'Country',
	plugins:[
		{
			xclass: 'Ext.plugin.RememberSelection',
			getDefaultSelectionRecords:function(list){
				var store = list.getStore();
				return [store.findRecord('name','United States')];
			}
		}
	]
});
*/

Ext.define('Ext.plugin.RememberSelection',{
    extend:'Ext.Component',
    alias:'plugin.rememberselection',

    config:{
        //Reference a function in the plugin configuration to specify a default selection. It should return an Array or Mixed Collection of records whose corresponding list items will be selected by default.
        getDefaultSelectionRecords:Ext.emptyFn,
        
        //Setting this property to true will supress the selection event when restoring default or "remembered" selections
        supressEvent:false,
        
        //Private
        list:null,
    },
	
	//Establishes the event handlers
    init:function(list){
        this.setList(list);
        
        //Uses onBefore so that selection persistence occurs before typical developer-defined selection behavior
        list.onBefore({
            selectionchange:'rememberSelections',
            painted:'restoreSelections',
            scope:this
        });
    },
    
    //Restores the "remembered" selections. If none are "remembered", restore the default selections
    restoreSelections:function(){
		var list = this.getList();
		
		//Gather up the records which correspond to the "remembered" list item selections
		var selected = list.getStore().queryBy(function(record,id){
			return record.get('selected');
		}).getRange();
		
		if(!Ext.isEmpty(selected)){
			//Reselects any "remembered" selections
			//deselectAll is only necessary because without it selecting a list item that is already selected won't trigger selection handlers set up by the developer
			list.deselectAll(true);
			list.select(selected,false,this.getSupressEvent());
		}else{
			//If there are no "remembered" selections, restore any default selections
			var fn = this.getGetDefaultSelectionRecords();
			var defaultselectionrecords = fn(list);
			if(!Ext.isEmpty(defaultselectionrecords)){
				list.select(defaultselectionrecords,false,this.getSupressEvent());
			}
		}
    },
    
    //Remembers the items that were selected in the associated list
    rememberSelections:function(list,records){
		var store = list.getStore();
		var proxy = store.getProxy();
		
		//If only one record should be selected at a time, wipe out the remembered selections
		if(list.getMode() == 'SINGLE'){
			store.each(function(record){
				if(record.get('selected')){
					record.set('selected',false);
				}
			});
		}
		
		//Remember the selection changes
		Ext.each(records,function(record){
			//This may throw an uncaught type error when the list filtering is based on selection.
			//I could not find any evidence that this has a negative effect on behavior
			try{record.set('selected',list.isSelected(record));}catch(e){}
		},this);
		
		//Reapplies the filters so that that lists that are filtered based on selection will display correctly
		if(!Ext.isEmpty(store.getFilters())){
			store.filter();
		}
    }
});
