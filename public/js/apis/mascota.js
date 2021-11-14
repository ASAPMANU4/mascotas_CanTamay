var apiMascota='http://localhost/mascotas_cantamay/public/apiMascota';
new Vue ({
	el:"#apiMascota",
	data:{
		prueba:'esto es una prueba de nuevo',
		mascotas:[],
		nombre:'',
		edad:'',
		peso:'',
		genero:'',
		agregando:true,
	},
	// al crearse la pagina que ejecute automaticamente la carga de las mascotas
	created:function(){
		this.obtenerMascotas();
	},

	methods:{
		obtenerMascotas:function(){
			this.$http.get( apiMascota).then(function(j){
				this.mascotas=j.data;
 				console.log(j.data);
			}).catch(function(j){
				console.log(j);
			});		
	
		},
		mostrarModal:function(){
			this.agregando=true;
			$('#modalMascota').modal('show');
		},

		guardarMascota:function(){
			// se construye el json para enviar al controlador 
			var mascota={nombre:this.nombre,edad:this.edad,peso:this.peso,genero:this.genero};
			// se envia los datos en json al controlador 
			this.$http.post(apiMascota,mascota).then(function(j){
				this.obtenerMascotas();
				this.nombre='';
				this.edad='';
				this.peso='';
				this.genero='';
			}).catch(function(j){
				console.log(j);
			});
			$('modalMascota').modal('hide');
			console.log(mascota);

			},

			eliminarMascota:function(id){
				var confir= confirm('Esta seguro de eliminar mascota?');
				if (confir)
				{
					this.$http.delete(apiMascota + '/' + id).then(function(f){
						this.obtenerMascotas();	
					}).catch(function(j){

					});
				}
			},

			editandoMascota:function(){
				this.agregando=false;
				$('#modalMascota').modal('show');
			},
			
			actualizarMascota:function(){
				alert('Estas modificando un mascota')
			}
		}
	
});

