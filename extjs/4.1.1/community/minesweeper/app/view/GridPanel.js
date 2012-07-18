/**
 * @class App.view. GridPanel
 * @extends Ext.grid.Panel
 * @author Armando Gonzalez iam@armando.mx
 * Esta es la definicion del grid que creara nuestro tablero de minas.
 */
Ext.define('App.view.GridPanel', {
    extend: 'Ext.grid.Panel',
	alias :'widget.minegrid',
	num : 8, // inicialmente el trablero consta de 8 x 8  minas y esta es la variable que modificaremos para aumentar o disminuir el tablero
	hideHeaders:true,
    initComponent: function(){
		var me = this;
		me.store = me.buildStore(); 
		me.columns = me.buildColumns();
		this.callParent(arguments);
		this.on('cellclick',me.validateMine,this); // evento que se dispara cuando se da click sobre alguna posible mina
	},
	validateMine:function(table,td,cellIndex,rec,tr,rowIndex){
		if(rec.get('data'+cellIndex) === 1){ // si existe mina la explotamos
			rec.data['data'+cellIndex] = 3;
			Ext.Msg.alert(':(','kaboooom!.');
		}
		else{
			rec.data['data'+cellIndex] = 4; // si no existe mina se trata de una banderia verde	
		}
		table.refresh();
	},
	buildColumns:function(){ // creamos las columnas de nuestro grid
		var me = this, cols = [];		
		for(var i = 0; i < me.num; i++){
			cols.push({
				text:i,
				dataIndex:'data' + i,
				flex:1,
				renderer:me.buildRenderer	
			});
		}
		return cols;
	},
	buildRenderer:function(val){// este es el metodo que se dispara cuando el slot cambia y muestra la mina o la bandera verde 
		switch(val){
			case 3: img = 'mine.png'; break;
			case 4: img = 'flag.png'; break;
			default: img = 'btnblue.png';break;
		}
		return '<img src="resources/images/'+img+'" width="24">';
	},
	buildStore:function(){ //creamos nuestro store que contendra cada una de las entidades de nuestro tablero
		var me = this, store;
		Ext.define('Mine', {
		    extend: 'Ext.data.Model',
		    fields: me.buildFields()
		});
		
		store = Ext.create('Ext.data.Store', {
	        model: 'Mine',
	        data: me.buildData()
	    });
		return store;
	},
	buildFields:function(){ // creamos la definicion de los slots, es decir qeu propiedades tienen
		var me = this,fields = [];
		for(var i = 0; i < me.num; i++){
			fields.push({
				name:'data' + i,
				type:'int'
			});
		}	
		return fields;
	},
	buildData:function(){ // aqui creamos nuestras entidades slots para cada una de las filas de nuestro store (Records)
		var me = this,data = [],row;
		for(var i = 0; i < me.num; i++){
			row = me.getRow()
			data.push(row);
		}
		return data;
	},
	getRow:function(){// aqui definimos las porpiedades de cada uno de nuestros records (slots)
		var me = this, row = [];
		for(var j = 0; j < me.num; j++){
			row.push(Math.floor(Math.random()*2)); // generamos un valor aleatorio entre cero = bandera verde  y uno = mina!!
		}
		return row;
	}
});