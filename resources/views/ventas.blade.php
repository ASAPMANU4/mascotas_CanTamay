@extends('layouts.master')
@section('titulo','Ventas')
@section('contenido')

<!-- inicio de div principal-->
<div id="apiVenta">
	<div class="row">
		<div class="col-md-4">

			<div class="input-group mb-3">
				<input type="text" placeholder="Escriba el sku del producto" class="form-control" v-model="sku" v-on:keyup.enter="buscarProducto()">
				<div class="input-group-append">
				<button class="btn btn-primary" @click="buscarProducto()">Buscar</button>		
				</div>	
			</div>

		</div>
	</div>
<!-- inicio de car -->
	<div class="card">
		<!-- inicio del card body -->
		<div class="card-body">
			<!-- inicio de row -->
			<div class="row">
				<div class="col-md-12">
					<table class="table table-bordered">
						<thead>
							<th style="background: #ffff66;">SKU</th>
							<th style="background: #ffff66;">producto</th>
							<th style="background: #ffff66;">operaciones</th>
							<th style="background: #ffff66;">precio</th>
							<th style="background: #ffff66;">cantidad</th>
							<th style="background: #ffff66;">total</th>

						</thead>
						<tbody>
							<tr v-for="(venta, index) in ventas">
								<td>@{{venta.sku}}</td>
								<td>@{{venta.nombre}}</td>
								<td>
									<button class="btn btn-default btn-sm" @click="eliminarProducto(index)">
										<i class="fas fa-trash-alt"></i>
									</button>
								</td>
								<td>@{{venta.precio}}</td>
								<td><input type="number" v-model.number="cantidades[index]"></td>
								<td>@{{totalProducto(index)}}</td>
							</tr>
						</tbody>
					</table>
					
				</div>
			</div>
			<!-- fin del row -->
		</div>
		<!-- fin del card body -->
	</div>
	<!-- fin del card -->
<div class="row">
	<div class="col-md-8"></div>
		<div class="col-md-4">
			<div class="card">
				<div class="card-body">

					<table class="table table-bordered table-condensed">
						<tr>
							<th style="background: #ffff66;">Subtotal</th>
							<td>@{{subTotal}}</td>
						</tr>
						<tr>
							<th style="background: #ffff66;">IVA</th>
							<td>$ @{{iva}}</td>
						</tr>
						<tr>
							<th style="background: #ffff66;">TOTAL</th>
							<td><b>$ @{{granTotal}}</b></td>
						</tr>
						<tr>
							<th style="background: #ffff66;">ARTICULOS:</th>
							<td><b> @{{noArticulos}}</b></td>
						</tr>
					</table>
			</div>
			<!-- fin del card body -->
		</div>
		<!-- fin de card -->
	</div>
			<!-- din del col-md-4 -->
</div>
@{{ventas}}

</div>
<!-- fin de div principal -->


@endsection

@push('scripts')
	<script type="text/javascript" src="{{asset('js/apis/apiVenta.js')}}"></script>
	<script type="text/javascript" src="{{asset('js/vue-resource.js')}}"></script>
@endpush