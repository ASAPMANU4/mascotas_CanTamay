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
		ventas:[],
		cantidades:[],
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
			});
		}
	}


	},//fin de methdos
	computed:{

	},
})

} window.onload = init;

