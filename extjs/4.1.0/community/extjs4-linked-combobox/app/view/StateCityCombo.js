Ext.define('ExtMVC.view.StateCityCombo' ,{
    extend: 'Ext.form.Panel',
    alias : 'widget.statecityform',

    frame: true,
    title:'Linked Comboboxes',
    style:'margin:16px',
    bodyStyle:'padding:10px',

    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 85,
        msgTarget: 'side'
     },

    items: [{
        xtype: 'combo',
        id: 'stateCombo',
        fieldLabel:'Select State',
        displayField:'state_name',
        valueField:'state_id',
        store: Ext.create('ExtMVC.store.States'),
        triggerAction:'all',
        mode:'local',
    },
    {
        xtype: 'combo',
        id: 'cityCombo',
        fieldLabel:'Select City',
        displayField:'city_name',
        valueField:'city_id',
        store: Ext.create('ExtMVC.store.Cities'),
        triggerAction:'all',
        mode:'local',
        disabled:true,
        lastQuery:''
    }]
    
 });   
