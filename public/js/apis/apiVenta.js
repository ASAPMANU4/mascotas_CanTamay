	function init() {
var apiProducto='http://localhost/mascotas_cantamay/public/apiProducto';
new Vue ({

	//asignamos el TOKEN 
	http: {
            headers: {
                'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
            }
        },

	el:'#apiVenta',

	data:{
		mensaje:"Hola mundo",
		sku:'',
		producto:[],
		ventas:[],
		cantidades:[],
		auxSubTotal:0,
		auxTotal:0,
		cant:1,

	},
	//se ejcuta automaticamente cuando se crea la pagina
	created:function(){

	},

	//inicio de methods
	methods:{
		buscarProducto:function(){
			if (this.sku)
			{
			var producto = {}
			this.$http.get(apiProducto + '/' + this.sku).then(function(j){
				producto = {
					sku:j.data.sku,
					nombre:j.data.nombre,
					precio:j.data.precio,
					cantidad:1,
					total:j.data.precio
				};

				this.ventas.push(producto);
				this.cantidades.push(1);
				this.sku='';
			})
		}
	},
		eliminarProducto:function(id){
			this.ventas.splice(id,1);
		}
	


	},//fin de methdos
	computed:{
		totalProducto(){
			return (id)=>{
				var total =0;
				total=this.ventas[id].precio * this.cantidades[id];
				// actualizo el total del producto en el array ventas
				this.ventas[id].total=total;
				// actualizo la cantidad en el array ventas
				this.ventas[id].cantidad=this.cantidades[id];
				return total.toFixed(1);
			}
			
		},
		// fin de totalProducto

		subTotal(){
			var total =0;
			for (var i = this.ventas.length - 1; i >= 0;i--) {
				total=total+this.ventas[i].total;
			}
			// mando una copia del subtotal ala seccion del data 
			// para el uso de otros calculos
			this.auxSubTotal=total.toFixed(1);
			return total.toFixed(1);
		},

		iva(){
			var auxIva=0;
			auxIva = this.auxSubTotal*0.16;
			return auxIva.toFixed(1); 
		},
		granTotal(){
			var auxTotal=0;
			auxTotal=this.auxSubTotal*1.16;
			return auxTotal.toFixed(1);
		},

		noArticulos(){
			var acum=0;
			for (var i = this.ventas.length -1; i >= 0; i--) {
			 acum=acum+this.ventas[i].cantidad;
		}
		return acum;
		}


	},
})

} window.onload = init;

