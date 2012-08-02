/**
 * Por Luis Enrique
 * @class App.view.GridPanel
 * Grid Panel que filtra
 *
 * @extends Ext.grid.Panel
 * @autor LCC. Luis Enrique Martínez Gómez<br>
 *        enrique@codetlan.com<br>
 * @fecha Julio de 2012. Mexico DF
 *
 */
Ext.define('App.view.GridPanel', {
    extend: 'Ext.grid.Panel',
    alias :'widget.individualfieldcolumn',
    initComponent: function(){
        var me = this;

        Ext.define('Browser', {
            extend: 'Ext.data.Model',
            idProperty: 'rendering_engine',
            fields: me.buildFields()
        });

        me.store = me.buildStore();
        me.columns = me.buildColumns();
        me.bbar = me.buildBbar();

        this.callParent(arguments);
    },

    buildColumns:function(){ // creamos las columnas de nuestro grid
        var cols = [
            {text: 'Rendering engine', flex: 1, sortable: true, dataIndex: 'rendering_engine'},
            {text: 'Browser',          flex: 1, sortable: true,  dataIndex: 'browser'},
            {text: 'Platform(s)',      flex: 1, sortable: true,  dataIndex: 'platform'},
            {text: 'Engine version',   flex: 1, sortable: true,  dataIndex: 'engine_version'},
            {text: 'CSS Grade',        flex: 1, sortable: true,  dataIndex: 'css_grade'}
        ];

        return cols;
    },

    buildStore:function(){ //creamos nuestro store que contendra cada una de las entidades de nuestro tablero
        var me = this, store;

        store = Ext.create('Ext.data.ArrayStore', {
            model: 'Browser',
            data: me.buildData()
        });

        return store;
    },

    buildFields:function(){ // creamos la definicion de los slots, es decir qeu propiedades tienen
        var fields = [
            {name: 'rendering_engine',  type: 'string'},
            {name: 'browser',           type: 'string', convert: null,     defaultValue: undefined},
            {name: 'platform',          type: 'string', convert: null,     defaultValue: undefined},
            {name: 'engine_version',    type: 'float',  convert: null,     defaultValue: undefined},
            {name: 'css_grade',         type: 'string', convert: null,     defaultValue: undefined}
        ];

        return fields;
    },

    buildData:function(){ // aqui creamos nuestras entidades slots para cada una de las filas de nuestro store (Records)
        // sample static data for the store
        var data = [
            ["Trident","Internet Explorer 4.0","Win 95+","4","X"],
            ["Trident","Internet Explorer 5.0","Win 95+","5","C"],
            ["Trident","Internet Explorer 5.5","Win 95+","5.5","A"],
            ["Trident","Internet Explorer 6","Win 98+","6","A"],
            ["Trident","Internet Explorer 7","Win XP SP2+","7","A"],
            ["Trident","AOL browser (AOL desktop)","Win XP","6","A"],
            ["Gecko","Firefox 1.0","Win 98+ / OSX.2+","1.7","A"],
            ["Gecko","Firefox 1.5","Win 98+ / OSX.2+","1.8","A"],
            ["Gecko","Firefox 2.0","Win 98+ / OSX.2+","1.8","A"],
            ["Gecko","Firefox 3.0","Win 2k+ / OSX.3+","1.9","A"],
            ["Gecko","Camino 1.0","OSX.2+","1.8","A"],
            ["Gecko","Camino 1.5","OSX.3+","1.8","A"],
            ["Gecko","Netscape 7.2","Win 95+ / Mac OS 8.6-9.2","1.7","A"],
            ["Gecko","Netscape Browser 8","Win 98SE+","1.7","A"],
            ["Gecko","Netscape Navigator 9","Win 98+ / OSX.2+","1.8","A"],
            ["Gecko","Mozilla 1.0","Win 95+ / OSX.1+",1,"A"],
            ["Gecko","Mozilla 1.1","Win 95+ / OSX.1+",1.1,"A"],
            ["Gecko","Mozilla 1.2","Win 95+ / OSX.1+",1.2,"A"],
            ["Gecko","Mozilla 1.3","Win 95+ / OSX.1+",1.3,"A"],
            ["Gecko","Mozilla 1.4","Win 95+ / OSX.1+",1.4,"A"],
            ["Gecko","Mozilla 1.5","Win 95+ / OSX.1+",1.5,"A"],
            ["Gecko","Mozilla 1.6","Win 95+ / OSX.1+",1.6,"A"],
            ["Gecko","Mozilla 1.7","Win 98+ / OSX.1+",1.7,"A"],
            ["Gecko","Mozilla 1.8","Win 98+ / OSX.1+",1.8,"A"],
            ["Gecko","Seamonkey 1.1","Win 98+ / OSX.2+","1.8","A"],
            ["Gecko","Epiphany 2.20","Gnome","1.8","A"],
            ["Webkit","Safari 1.2","OSX.3","125.5","A"],
            ["Webkit","Safari 1.3","OSX.3","312.8","A"],
            ["Webkit","Safari 2.0","OSX.4+","419.3","A"],
            ["Webkit","Safari 3.0","OSX.4+","522.1","A"],
            ["Webkit","OmniWeb 5.5","OSX.4+","420","A"],
            ["Webkit","iPod Touch / iPhone","iPod","420.1","A"],
            ["Webkit","S60","S60","413","A"],
            ["Presto","Opera 7.0","Win 95+ / OSX.1+","-","A"],
            ["Presto","Opera 7.5","Win 95+ / OSX.2+","-","A"],
            ["Presto","Opera 8.0","Win 95+ / OSX.2+","-","A"],
            ["Presto","Opera 8.5","Win 95+ / OSX.2+","-","A"],
            ["Presto","Opera 9.0","Win 95+ / OSX.3+","-","A"],
            ["Presto","Opera 9.2","Win 88+ / OSX.3+","-","A"],
            ["Presto","Opera 9.5","Win 88+ / OSX.3+","-","A"],
            ["Presto","Opera for Wii","Wii","-","A"],
            ["Presto","Nokia N800","N800","-","A"],
            ["Presto","Nintendo DS browser","Nintendo DS","8.5","C/A<sup>1</sup>"],
            ["KHTML","Konqureror 3.1","KDE 3.1","3.1","C"],
            ["KHTML","Konqureror 3.3","KDE 3.3","3.3","A"],
            ["KHTML","Konqureror 3.5","KDE 3.5","3.5","A"],
            ["Tasman","Internet Explorer 4.5","Mac OS 8-9","-","X"],
            ["Tasman","Internet Explorer 5.1","Mac OS 7.6-9","1","C"],
            ["Tasman","Internet Explorer 5.2","Mac OS 8-X","1","C"],
            ["Misc","NetFront 3.1","Embedded devices","-","C"],
            ["Misc","NetFront 3.4","Embedded devices","-","A"],
            ["Misc","Dillo 0.8","Embedded devices","-","X"],
            ["Misc","Links","Text only","-","X"],
            ["Misc","Lynx","Text only","-","X"],
            ["Misc","IE Mobile","Windows Mobile 6","-","C"],
            ["Misc","PSP browser","PSP","-","C"],
            ["Other browsers","All others","-","-","U"]
        ];

        return data;
    },

    buildBbar : function (){
        var me = this, bBar, crEngine, cBrowser, cPlatform, ceVersion, cCss, bReset;

        crEngine    = me.buildCombo('Rendering engine', 'rendering_engine');
        cBrowser    = me.buildCombo('Browser', 'browser');
        cPlatform   = me.buildCombo('Platform', 'platform');
        ceVersion   = me.buildCombo('Engine version', 'engine_version');
        cCss        = me.buildCombo('Css Grade', 'css_grade');
        bReset      = Ext.create('Ext.Button', {text: 'Reset', handler: function() { me.resetCombos();}});

        bBar = [crEngine,cBrowser,cPlatform,ceVersion,cCss, bReset];

        return bBar;
    },

    buildCombo:function(name, dataIndex){
        var me = this, combo;

        combo = Ext.create('Ext.form.ComboBox', {
            id: dataIndex+this.id,
            store: me.buildStore().collect(dataIndex),
            emptyText: name+'...',
            displayField: dataIndex,
            valueField: dataIndex,
            queryMode: 'local',
            flex:1,
            listeners:{
                scope:this,
                change:function(t, nv, ov, eOpts){
                    me.filterStore();
                }
            }
        });

        return combo;
    },

    filterStore:function(){
        var me = this, i, value, combos = ['rendering_engine', 'browser', 'platform', 'engine_version', 'css_grade'];

        me.store.clearFilter(false);

        for (i = 0; i < combos.length; i++){
            value = Ext.getCmp(combos[i]+me.id).getValue();
            if (!Ext.isEmpty(value)){
                me.store.filter(combos[i], value, true, false)
            }

        }

    },

    resetCombos:function(){
        var me = this, i, combos = ['rendering_engine', 'browser', 'platform', 'engine_version', 'css_grade'];

        me.store.clearFilter(false);

        for (i = 0; i < combos.length; i++){
            Ext.getCmp(combos[i]+me.id).reset();
        }
    }


});