Ext.define('ExtMVC.store.Numbers', {
    extend: 'Ext.data.ArrayStore',
    model: 'ExtMVC.model.Number',

    data: [
        [123,'One Hundred Twenty Three'],
        ['1', 'One'], 
        ['2', 'Two'], 
        ['3', 'Three'], 
        ['4', 'Four'], 
        ['5', 'Five'],
        ['6', 'Six'], 
        ['7', 'Seven'], 
        ['8', 'Eight'], 
        ['9', 'Nine']
    ],

    sortInfo: {
        field: 'value',
        direction: 'ASC'
    }
 });
