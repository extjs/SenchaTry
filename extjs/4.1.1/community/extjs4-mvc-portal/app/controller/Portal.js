Ext.define('ExtMVC.controller.Portal', {
    extend: 'Ext.app.Controller',

    stores: ['Stocks', 'ChartStocks'],

    models: ['Stock', 'ChartStock'],

    views: ['portlet.GridPortlet', 'portlet.ChartPortlet'],

    init: function() {
        this.control({
            'gridportlet': {
                close: this.onPortletClose
            },
            'chartportlet': {
                close: this.onPortletClose
            },
            'portlet': {
                close: this.onPortletClose
            }
        }); 
    },

    onPortletClose: function(portlet) {
        console.log(portlet.title);
        this.showMsg('"' + portlet.title + '" was removed');
    },

    showMsg: function(msg) {
        var el = Ext.get('app-msg'),
            msgId = Ext.id();

        this.msgId = msgId;
        el.update(msg).show();

        Ext.defer(this.clearMsg, 3000, this, [msgId]);
    },

    clearMsg: function(msgId) {
        if (msgId === this.msgId) {
            Ext.get('app-msg').hide();
        }
    }
});
