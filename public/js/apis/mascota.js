function init() {
var apiMascota='http://localhost/mascotas_cantamay/public/apiMascota';
new Vue ({
	el:"#apiMascota",
	data:{
		prueba:'esto es una prueba de nuevo',
		mascotas:[],
	},
	// al crearse la pagina que ejecute automaticamente la carga de las mascotas
	created:function(){
		this.obtenerMascotas();
	},

	methods:{
		obtenerMascotas:function(){
			this.$http.get(apiMascota).then(function(j){
				this.mascotas=j.data;
 				console.log(j.data);
			}).catch(function(j){
				console.log(j);
			});		
		},

		mostrarModal:function(){
			$('#modalMascota').modal('show');
		}
	}
});

} window.onload = init;