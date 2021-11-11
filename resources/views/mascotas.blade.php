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
				</div>

						<div class="card-body">
							
							<!-- inicio de la tabla -->
				<table class="table table-borderd table-striped">
						<thead>
							<th>Nombre</th>
							<th>edad</th>
							<th>genero</th>
							<th>acciones</th>
						</thead>

						<tbody>
							<tr v-for="mascota in mascotas">
								<td>@{{mascota.nombre}}</td>
								<td>@{{mascota.edad}}</td>
								<td>@{{mascota.genero}}</td>
								<td>
									<button class="btn btn-warning btn-sm"><i class=" fas fa-pencil-alt"></i></button>
								</td>
								<td>
									<button class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
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
        <h5 class="modal-title" id="exampleModalLabel">Agregando mascota</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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