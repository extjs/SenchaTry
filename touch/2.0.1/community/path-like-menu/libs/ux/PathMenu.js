/**
 * Path like menu for Sencha Touch 2
 *
 * requieres the pathmenu.sass file for the styling and animations
 *
 * @author Nils Dehl <mail@nils-dehl.de>
 * @www http://nils-dehl.de
 */
Ext.define('Ext.ux.PathMenu', {
	mixins: ['Ext.mixin.Observable'],

	xtype: 'pathmenu',

	requires: [
		'Ext.Button',
		'Ext.util.DelayedTask'
	],

	config: {
		cls: 'x-ux-pathmenu',
		top: null,
		bottom: null,
		right: null,
		left: null,
		height: 40,
		width: 40,

		items: [],

		/**
		 * Radius in px defaults to 150 which fits for 6 menu items
		 * @type Number
		 */
		radius: 150,

		/**
		 * config for the menu button
		 *
		 * @type object
		 */
		menuButtonDefault: {
			iconCls: 'add',
			ui : 'pathmenu',
			iconMask: true,
			isOpen: false,
			pathButtonType: 'menu',
			cls: 'menubutton'
		},

		/**
		 * config for menu item button
		 * @type
		 */
		menuItemDefault: {
			iconMask: true,
			ui : 'pathmenu',
			isActive: false,
			pathButtonType: 'menuitem'
		},

		menuItems: null,
		menuTrigger: null
	},

	/**
	 */
	constructor: function (config) {
		this.initConfig(config);
		var me = this,
			addItems = [],
			defaultButton = {
				xtype: 'button',
				top: this.getTop(),
				bottom: this.getBottom(),
				right: this.getRight(),
				left: this.getLeft(),
				height: this.getHeight(),
				width: this.getWidth()
			},
			menuButtonDefault = this.getMenuButtonDefault(),
			menuItemDefault = this.getMenuItemDefault();

		Ext.each(
			config.items,
			function(item, index){
				var newButtonConf = Ext.apply(item, menuItemDefault, defaultButton);
				Ext.apply(newButtonConf, {
					handler: me.onMenuItemButtonTap,
					scope: me
				});

				addItems.push(item);
				delete(item);
			},
			this
		);

		addItems.push(
			Ext.apply(
				{
					handler: me.onMenuButtonTap,
					scope: me
				},
				menuButtonDefault,
				defaultButton
			)
		);
		Ext.Viewport.add(addItems);


		//this.setMenuItems()
	},

	/**
	 * [onMenuItemButtonTap description]
	 * @param  {[type]} button [description]
	 * @return {[type]}        [description]
	 */
	onMenuItemButtonTap: function(menuitem) {
		var	menu = this,
			menuButton = Ext.ComponentQuery.query('button[pathButtonType=menu]')[0];

		menuitem.addCls('tapped');
		menu.close(menuButton);

		menuitem.fireEvent('itemtap', menu, menuitem)
	},

	/**
	 * [onMenuButtonTap description]
	 *
	 * @param  {[type]} menuButton [description]
	 * @return {[type]}            [description]
	 */
	onMenuButtonTap: function(menuButton) {
		if (!menuButton.isOpen) {
			// open menu
			this.open(menuButton);
		} else {
			// close Menu
			this.close(menuButton);
		}
	},

	/**
	 * [openMenu description]
	 *
	 * @param  {[type]} menuButton [description]
	 * @return {[type]}            [description]
	 */
	open: function(menuButton) {
		var	items = Ext.ComponentQuery.query('button[pathButtonType=menuitem]'),
			bottom = menuButton.getBottom(),
			left = menuButton.getLeft(),
			radius = 150,
			section = items.length - 1
			angle = 90 / section;

		menuButton.replaceCls('close', 'open');

		Ext.each(items, function(item, index) {
			item.addCls('menuitembutton');
			item.replaceCls('close', 'open');

			var currentAngle = (90 - (angle * (section - index))),
				radiant = Math.PI / 180,
				currnetRadiant = radiant * currentAngle,
				x = Math.round(Math.cos(currnetRadiant) * radius),
				y = Math.round(Math.sin(currnetRadiant) * radius);

			item.setLeft(left + x);
			item.setBottom(bottom + y);
		});

		menuButton.isOpen = true;
	},

	/**
	 * [closeMenu description]
	 *
	 * @param  {[type]} menuButton [description]
	 * @return {[type]}            [description]
	 */
	close: function(menuButton) {
		var	items = Ext.ComponentQuery.query('button[pathButtonType=menuitem]');

		menuButton.replaceCls('open', 'close');

		Ext.each(items, function(item, index) {
			if (item.getCls().indexOf('tapped') === -1) {
				item.replaceCls('open', 'close');
				item.setLeft(10);
				item.setBottom(10);
			} else {

				var task = Ext.create(
					'Ext.util.DelayedTask',
					function() {
						item.removeCls('menuitembutton');
						item.setLeft(10);
						item.setBottom(10);
						item.removeCls('tapped');
					}
				);
				task.delay(900);

			}
		});
		menuButton.isOpen = false;
	}
});