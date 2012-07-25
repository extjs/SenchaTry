Ext.define('Path.view.Dummy', {
	extend: 'Ext.Container',
	xtype: 'dummy',
	requires: [
		'Ext.TitleBar'
	],

	config: {
		cls: 'bg',
		scrollable: true,
		styleHtmlContent: true,
		html: 'A path like menu for Sencha Touch 2. <br><br>' +
			'<b>git repo:</b> https://bitbucket.org/nilsdehl/<br>' +
			'<b>website:</b> http://nils-dehl.de<br>' +
			'<b>twitter:</b> @nilsdehl<br>' +
			'<b>forum:</b> mrsunshine<br>',
		items: [
			{
				xtype: 'titlebar',
				title: 'Path like Menu'
			}
		]
	}
});