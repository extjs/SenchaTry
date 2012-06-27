/**
 * @author Andrea Cammarata (@AndreaCammarata)
 * @class RSS.tux.fx.layout.card.TimeMachine
 * @extends Ext.fx.layout.card.Style
 * Custom Card Layout Style that simulate the Apple Time Machine
 * effect sending the views back and forward in time.
 */
Ext.define('RSS.tux.fx.layout.card.TimeMachine', {
    extend: 'Ext.fx.layout.card.Style',
    alias: 'fx.layout.card.timemachine',
    config: {
        inAnimation: {
            type: 'timemachine',
            easing: 'ease-out'
        },
        outAnimation: {
            type: 'timemachine',
            easing: 'ease-out',
            out: true
        }
    }
});
