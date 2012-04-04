Ext.application({
    launch: function () {
        Ext.define('TeamModel', {
            extend: 'Ext.data.Model',
            config: {
                fields: [{
                    name: 'teamName',
                    type: 'string'
                }, {
                    name: 'division',
                    type: 'string'
                }, {
                    name: 'league',
                    type: 'string'
                }], // fields
                validations: [{
                    field: 'teamName',
                    type: 'presence',
                    message: 'Team Name is required.'
                }, {
                    field: 'division',
                    type: 'presence',
                    message: 'Division is required.'
                }, {
                    field: 'division',
                    type: 'inclusion',
                    list: ['East', 'Central', 'West'],
                    message: 'Division must be one of: East, Central, West'
                }, {
                    field: 'league',
                    type: 'presence',
                    message: 'League is required.'
                }, {
                    field: 'league',
                    type: 'inclusion',
                    list: ['AL', 'NL'],
                    message: 'League must be one of: AL, NL'
                }] // validations
            } // config
        }); // define()
        
        var form = Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    text: 'Validate form',
                    handler: function () {
                        var teamModel = Ext.create('TeamModel'),
                            errors, errorMessage = '';
                        
                        form.updateRecord(teamModel);
                        errors = teamModel.validate();
                        
                        if (!errors.isValid()) {
                            errors.each(function (err) {
                                errorMessage += err.getMessage() + '<br/>';
                            }); // each()
                            Ext.Msg.alert('Form is invalid!', errorMessage);
                        } else {
                            Ext.Msg.alert('Form is valid!', '');
                        } // if
                    } // handler
                }] // items (toolbar)
            }, {
                xtype: 'fieldset',
                items: [{
                    xtype: 'textfield',
                    name: 'teamName',
                    label: 'Team Name:'
                }, {
                    xtype: 'textfield',
                    name: 'division',
                    label: 'Division:',
                    placeHolder: 'East | Central | West'
                }, {
                    xtype: 'textfield',
                    name: 'league',
                    label: 'League:',
                    placeHolder: 'AL | NL'
                }] // items (fieldset)
            }] // items (panel)
        }); // create()
    } // launch
}); // application()
