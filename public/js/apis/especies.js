function init() {
var apiEspecie='http://localhost/mascotas_cantamay/public/apiEspecie';
new Vue ({

	//asignamos el TOKEN 
	http: {
            headers: {
                'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
            }
        },

	el:'#apiEspecies',

	data:{
		mensaje:"Hola mundo",
		especies:[],
	},
	created:function(){
		this.getEspecies();
	},

	//inicio de methods
	methods:{
		//obtiene el listao de todas las especies
		getEspecies:function(){
			this.$http.get(apiEspecie).then(function(j){
				this.especies=j.data;
			})
		},

		eliminarEspecie:function(id){

			Swal.fire({
           title: 'Estas seguro?',
           text: "No se podra reveritir esta accion!",
           icon: 'warning',
           showCancelButton: true,
           confirmButtonColor: '#3085d6',
           cancelButtonColor: '#d33',
           confirmButtonText: 'SI, borra esto!'
         }).then((result) => {
           if (result.isConfirmed) {
           	//Si dice que si, sera eliminada la mascota seleccionada
           this.$http.delete(apiEspecie + '/' + id).then(function(j){
           		this.getEspecies();
			}).catch(function(j){
				console.log(j);
			});
            //FIN DE LA ELIMINACION
             Swal.fire(
               'Eliminado!',
               'La mascota ha sido eliminada.',
               'success'
             )
           }
         });



		},
		//Fin del metodo elkiminar

		mostrarModal(){
			$('#modalEspecies').modal('show');

		}


	},//fin de methdos
	computed:{

	},
})

} window.onload = init;
