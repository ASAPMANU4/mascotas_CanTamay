var apiMascota='http://localhost/mascotas_cantamay/public/apiMascota';
var apiEspecie='http://localhost/mascotas_cantamay/public/apiEspecie';
new Vue ({
	el:"#apiMascota",
	data:{
		prueba:'esto es una prueba de nuevo',
		mascotas:[],
		especies:[],
		razas:[],
		nombre:'',
		edad:'',
		peso:'',
		genero:'',
		agregando:true,
		id_mascota:'',
		id_especie:'',
		id_raza:'',
		buscar:'',
	},
	// al crearse la pagina que ejecute automaticamente la carga de las mascotas
	created:function(){
		this.obtenerMascotas();
		this.obtenerEspecies();
	},
	// inicio de methods
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
			this.id_especie='';
			$('#modalMascota').modal('show');
		},

		guardarMascota:function(){
			// se construye el json para enviar al controlador 
			var mascota={nombre:this.nombre,edad:this.edad,peso:this.peso,genero:this.genero,id_especie:this.id_especie};

			// se envia los datos en json al controlador 
			this.$http.post(apiMascota,mascota).then(function(j){
				this.obtenerMascotas();
				this.nombre='';
				this.edad='';
				this.peso='';
				this.genero='';
				this.id_especie='';
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
								genero:this.genero,
								id_especie:this.id_especie
								};
				this.$http.patch(apiMascota + '/' + this.id_mascota,jMascota).then(function(j){
					this.obtenerMascotas();

				});
				$('modalMascota').modal('hide');
			},

			obtenerEspecies:function(){
				this.$http.get(apiEspecie).then(function(j){
					this.especies=j.data;

				})
			},

			obtenerRazas(e){
				var id_especie=e.target.value;
				// console.log(id_especie);

				this.$http.get(ruta + '/getRazas/' + id_especie).then(function(j){
					this.razas=j.data;
				});
			}
		},
		// fin de methods
		
		// incio de computed
		computed:{
			filtroMascotas:function(){
				return this.mascotas.filter((mascota)=>{
					return mascota.nombre.toLowerCase().match(this.buscar.toLowerCase().trim()) ||
							mascota.especie.especie.toLowerCase().match(this.buscar.toLowerCase().trim())
				});
			}
		}
		// fin de computed


});

