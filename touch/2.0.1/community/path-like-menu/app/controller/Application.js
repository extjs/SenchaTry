Ext.define('Path.controller.Application', {
	extend: 'Ext.app.Controller',
	requires: ['Ext.ux.PathMenu'],

	config: {
		views: ['Dummy'],

		refs: {
		},
		control: {
			'button[pathButtonType=menuitem]': {
				itemtap: 'onPathMenuItemTap'
			}
		}
	},

	// called when the Application is launched, remove if not needed
	launch: function(app) {
		this.initViewport();
		Ext.create('Ext.ux.PathMenu',{
			bottom: 10,
			left: 10,
			items: [
				{
					iconCls: 'action',
					cardIndex: 0
				},
				{
					iconCls: 'add',
					cardIndex: 1
				},
				{
					iconCls: 'compose',
					cardIndex: 2
				},
				{
					iconCls: 'home',
					cardIndex: 3
				},
				{
					iconCls: 'refresh',
					cardIndex: 4
				}
			]
		});
	},

	/**
	 *
	 */
	initViewport: function() {
		Ext.Viewport.add({
			xtype: 'dummy'
		});
	},

	onPathMenuItemTap: function(menu, menuitem) {
		console.log(menu, menuitem);
	}
});
