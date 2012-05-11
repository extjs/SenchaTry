/*global Ext:false */
/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.require(['*']);

Ext.onReady(function () {

    // NOTE: This is an example showing simple state management. During development,
    // it is generally best to disable state management as dynamically-generated ids
    // can change across page loads, leading to unpredictable results.  The developer
    // should ensure that stable state ids are set for stateful components in real apps.
    Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));

    var viewport = Ext.create('Ext.Viewport', {
        layout: 'border',
        items: [{
            region: 'west',
            id: 'west-panel',
            title: 'West',
            split: true,
            width: 200,
            minSize: 175,
            maxSize: 400,
            collapsible: true,
            margins: '35 0 5 5',
            cmargins: '35 5 5 5',
            layout: 'accordion',
            layoutConfig: {
                animate: true
            },
            items: [{
                html: Ext.example.shortBogusMarkup,
                title: 'Navigation',
                autoScroll: true,
                border: false,
                iconCls: 'nav'
            }, {
                title: 'Settings',
                html: Ext.example.shortBogusMarkup,
                border: false,
                autoScroll: true,
                iconCls: 'settings'
            }]
        }, {
            region: 'center',
            margins: '35 5 5 0',
            layout: 'column',
            autoScroll: true,
            defaults: {
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                }
            },
            items: [{
                columnWidth: 1 / 3,
                baseCls: 'x-plain',
                bodyStyle: 'padding:5px 0 5px 5px',
                items: [{
                    title: 'A Panel',
                    html: Ext.example.shortBogusMarkup
                }]
            }, {
                columnWidth: 1 / 3,
                baseCls: 'x-plain',
                bodyStyle: 'padding:5px 0 5px 5px',
                items: [{
                    title: 'A Panel',
                    html: Ext.example.shortBogusMarkup
                }]
            }, {
                columnWidth: 1 / 3,
                baseCls: 'x-plain',
                bodyStyle: 'padding:5px',
                items: [{
                    title: 'A Panel',
                    html: Ext.example.shortBogusMarkup
                }, {
                    title: 'Another Panel',
                    html: Ext.example.shortBogusMarkup
                }]
            }]
        }]
    });
});
