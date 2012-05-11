/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.define('Feature', {
            extend: 'Ext.data.Model'
        }); // define()
        
        var store = Ext.create('Ext.data.Store', {
            model: 'Feature',
            sorters: 'feature',
            fields: ['feature', 'value'],
            data: [{
                feature: 'Audio',
                value: Ext.feature.has.Audio
            }, {
                feature: 'Canvas',
                value: Ext.feature.has.Canvas
            }, {
                feature: 'ClassList',
                value: Ext.feature.has.ClassList
            }, {
                feature: 'CreateContextualFragment',
                value: Ext.feature.has.CreateContextualFragment
            }, {
                feature: 'Css3dTransforms',
                value: Ext.feature.has.Css3dTransforms
            }, {
                feature: 'CssAnimations',
                value: Ext.feature.has.CssAnimations
            }, {
                feature: 'CssTransforms',
                value: Ext.feature.has.CssTransforms
            }, {
                feature: 'CssTransitions',
                value: Ext.feature.has.CssTransitions
            }, {
                feature: 'DeviceMotion',
                value: Ext.feature.has.DeviceMotion
            }, {
                feature: 'Geolocation',
                value: Ext.feature.has.Geolocation
            }, {
                feature: 'History',
                value: Ext.feature.has.History
            }, {
                feature: 'Orientation',
                value: Ext.feature.has.Orientation
            }, {
                feature: 'OrientationChange',
                value: Ext.feature.has.OrientationChange
            }, {
                feature: 'Range',
                value: Ext.feature.has.Range
            }, {
                feature: 'SqlDatabase',
                value: Ext.feature.has.SqlDatabase
            }, {
                feature: 'Svg',
                value: Ext.feature.has.Svg
            }, {
                feature: 'Touch',
                value: Ext.feature.has.Touch
            }, {
                feature: 'Video',
                value: Ext.feature.has.Video
            }, {
                feature: 'Vml',
                value: Ext.feature.has.Vml
            }, {
                feature: 'WebSockets',
                value: Ext.feature.has.WebSockets
            }] // data
        }); // create()
        
        Ext.create('Ext.List', {
            fullscreen: true,
            itemTpl: '{feature}: <code>{value}</code>',
            store: store
        }); // create()
    } // launch
}); // application()
