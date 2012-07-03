Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', 'app/ux');

/*
 * BUG: suspentEvents not honoured in Ext.app.EventBus
 *
 * note: this fix does not queue events when asked.
 *
 * http://www.sencha.com/forum/showthread.php?171525
 */
Ext.syncRequire('Ext.app.EventBus');
Ext.override(Ext.app.EventBus, {
    constructor: function() {
        this.mixins.observable.constructor.call(this);


        this.bus = {};


        var me = this;
        Ext.override(Ext.Component, {
            fireEvent: function(ev) {
// [
// --
//              if (Ext.util.Observable.prototype.fireEvent.apply(this, arguments) !== false) {
// ++
                if (Ext.util.Observable.prototype.fireEvent.apply(this, arguments) !== false && !this.eventsSuspended) {
// ]
                    return me.dispatch.call(me, ev, this, arguments);
                }
                return false;
            }
        });
    }
});

Ext.application({
    name: 'ExtMVC',

    controllers: [
        'Stocks'
    ],

    autoCreateViewport: true
});
