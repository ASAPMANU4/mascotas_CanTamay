function init() {
var apiEspecie='http://localhost/mascotas_cantamay/public/apiEspecie';
new Vue ({
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
		getEspecies:function(){
			this.$http.get(apiEspecie).then(function(j){
				this.especies=j.data;
			})
		}

	},//fin de methdos
	computed:{

	},
})

} window.onload = init;
