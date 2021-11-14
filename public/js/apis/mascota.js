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
		id_mascota:'',
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
			this.nombre='';
			this.edad='';
			this.peso='';
			this.genero='';
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

			editandoMascota:function(id){
				this.agregando=false;
				this.id_mascota=id;
				this.$http.get(apiMascota + '/' + id).then(function(j){
					// console.log(j.data);
					this.nombre=j.data.nombre;
					this.edad=j.data.edad;
					this.genero=j.data.genero;
					this.peso=j.data.peso;
				});

				$('#modalMascota').modal('show');
			},
			
			actualizarMascota:function(){
				var jMascota = {nombre:this.nombre,
								edad:this.edad,
								peso:this.peso,
								genero:this.genero
								};
				this.$http.patch(apiMascota + '/' + this.id_mascota,jMascota).then(function(j){
					this.obtenerMascotas();

				});
				$('modalMascota').modal('hide');
			}
		}
	
});

