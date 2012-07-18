/**
 * This is the main code for the application
 */

Ext.Loader.setConfig({
	enabled:true
});
Ext.application({
    name: 'App',

	requires:['App.view.GridPanel'],
	//stores:[],
	
    launch: function() {
     	Ext.create('Ext.Window',{
			width:450,
			height:310,
			maximizable:true,
			title:'Buscaminas',
			autoScroll:true,
			frame:false,
			layout:'fit',
			items:[{
				xtype:'minegrid'
			}]
		}).show();
    }
});
