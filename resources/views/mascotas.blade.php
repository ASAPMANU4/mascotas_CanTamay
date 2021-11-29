@extends('layouts.master')
@section('titulo','CRUD Mascotas')
@section('contenido')
	<!-- INCIO DE DIV -->
	<div id="apiMascota">
		<div class="row">
			<!-- inicio del col-md-12 -->
			<div class="col-md-12">
				<div class="card card-warning">
					<div class="card-warning">
						<div class="card-header"><h3>CRUD Mascotas
						<span class="btn btn-sm btn-primary">
							<i class="fas fa-plus" @click="mostrarModal()"></i>
						</span>
					</h3>
					<div class="col-sm-6">
						<input type="text" placeholder="Escriba el nombre de la mascota o la especie" class="form-control">
					</div>
				</div>

						<div class="card-body">
							
							<!-- inicio de la tabla -->
				<table class="table table-borderd table-striped">
						<thead>
							<th>ID mascota</th>
							<th>Nombre</th>
							<th>edad</th>
							<th>genero</th>
							<th>acciones</th>
						</thead>

						<tbody>
							<tr v-for="mascota in filtroMascotas">
								<td hidden="">@{{mascota.id_mascota}}</td>
								<td>@{{mascota.nombre}}</td>
								<td>@{{mascota.edad}}</td>
								<td>@{{mascota.genero}}</td>
								<td>
									<button class="btn btn-warning btn-sm" @click="editandoMascota(mascota.id_mascota)"><i class=" fas fa-pencil-alt"></i></button>
								</td>
								<td>
									<button class="btn btn-danger btn-sm" @click="eliminarMascota(mascota.id_mascota)"><i class="fas fa-trash-alt"></i></button>
								</td>
							</tr>
						</tbody>
				</table>
				<!-- fin de la tabla -->
				</div>
				
			  </div>	
			 </div>
			</div>
			<!-- fin del col-md-12 -->
		</div>
		
		<!-- Modal -->
<div class="modal fade" id="modalMascota" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"v-if="agregando==true">Agregando mascota</h5>
        <h5 class="modal-title" id="exampleModalLabel"v-if="agregando==false">Editando mascota</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
      	<input type="text" class="form-control" placeholder="Escriba el nombre de la mascota" v-model="nombre"><br>
      	<input type="text" class="form-control" placeholder="Escriba la edad" v-model="edad"><br>
      	<input type="number" class="form-control" placeholder="Escriba el peso" v-model="peso"><br>
      	<select class="form-row" v-model="genero">
      		<option disabled="">Elije un genero</option>
      		<option value="M">M</option>
      		<option value="H">H</option>
      	</select>
      	<br>
      	<select class="form-control" v-model="id_especie">
      		<option v-for="especie in especies" v-bind:value="especie.id_especie" @change="obtenerRazas">@{{especie.especie}}</option>
      	</select>
      	<br>
      	<select class="form-control">
      			<option value="" disabled="">seleccione una raza</option>
      			<option v-for="raza in razas" v-bind:value="id_raza">@{{raza.raza}}</option>
      	</select>
      <!-- 	<h5>especie elegida es: @{{id_especie}}</h5> -->

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" @click="guardarMascota()" v-if="agregando==true">Guardar</button>
        <button type="button" class="btn btn-primary" @click="actualizarMascota()" v-if="agregando==false">Guardar</button>
      </div>
    </div>
  </div>
</div>
<!-- termina venta modal -->

	</div>
	<!-- TERMINA DIV -->


@endsection

@push('scripts')
	<script type="text/javascript" src="{{asset('js/apis/mascota.js')}}"></script>
	<script type="text/javascript" src="{{asset('js/vue-resource.js')}}"></script>
@endpush
