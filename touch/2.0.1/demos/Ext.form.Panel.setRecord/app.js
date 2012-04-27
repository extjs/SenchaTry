Ext.application({
    launch: function () {
        Ext.define('TeamModel', {
            extend: 'Ext.data.Model',
            config: {
                fields: ['teamName', 'division', 'league']
            } // config
        }); // define()
        
        var form = Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    text: 'setRecord(Giants)',
                    handler: function () {
                        var team = Ext.create('TeamModel', {
                            teamName: 'San Francisco Giants',
                            league: 'NL',
                            division: 'West'
                        }); // create()
                        form.setRecord(team);
                    } // handler
                }, {
                    text: 'setRecord(Tigers)',
                    handler: function () {
                        var team = Ext.create('TeamModel', {
                            teamName: 'Detroit Tigers',
                            league: 'AL',
                            division: 'Central'
                        }); // create()
                        form.setRecord(team);
                    } // handler
                }] // items (toolbar)
            }, {
                xtype: 'fieldset',
                items: [{
                    xtype: 'textfield',
                    name: 'teamName',
                    label: 'Team Name:'
                }, {
                    xtype: 'selectfield',
                    name: 'division',
                    label: 'Division:',
                    options: [{
                        text: 'East',
                        value: 'East'
                    }, {
                        text: 'Central',
                        value: 'Central'
                    }, {
                        text: 'West',
                        value: 'West'
                    }] // options
                }, {
                    xtype: 'selectfield',
                    name: 'league',
                    label: 'League:',
                    options: [{
                        text: 'AL',
                        value: 'AL'
                    }, {
                        text: 'NL',
                        value: 'NL'
                    }] // options
                }] // items (fieldset)
            }] // items (panel)
        }); // create()
    } // launch
}); // application()
