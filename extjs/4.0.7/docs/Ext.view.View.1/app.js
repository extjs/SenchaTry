/*global Ext:false */
Ext.onReady(function () {
    Ext.define('Image', {
        extend: 'Ext.data.Model',
        fields: [{
            name: 'src',
            type: 'string'
        }, {
            name: 'caption',
            type: 'string'
        }]
    });

    Ext.create('Ext.data.Store', {
        id: 'imagesStore',
        model: 'Image',
        data: [{
            src: 'http://www.sencha.com/img/20110215-feat-drawing.png',
            caption: 'Drawing &amp; Charts'
        }, {
            src: 'http://www.sencha.com/img/20110215-feat-data.png',
            caption: 'Advanced Data'
        }, {
            src: 'http://www.sencha.com/img/20110215-feat-html5.png',
            caption: 'Overhauled Theme'
        }, {
            src: 'http://www.sencha.com/img/20110215-feat-perf.png',
            caption: 'Performance Tuned'
        }]
    });

    var imageTpl = new Ext.XTemplate('<tpl for=".">', '<div style="margin-bottom: 10px;" class="thumb-wrap">', '<img src="{src}" />', '<br/><span>{caption}</span>', '</div>', '</tpl>');

    Ext.create('Ext.view.View', {
        store: Ext.data.StoreManager.lookup('imagesStore'),
        tpl: imageTpl,
        itemSelector: 'div.thumb-wrap',
        emptyText: 'No images available',
        renderTo: Ext.getBody()
    });
});
