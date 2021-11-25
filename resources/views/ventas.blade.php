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

<div class="row">
	<div class="col-md-12">
		<table class="table table-bordered">
			<thead>
				<th>SKU</th>
				<th>producto</th>
				<th>precio</th>
				<th>cantidad</th>
				<th>total</th>
			</thead>
			<tbody>
				<tr v-for="venta in ventas">
					<td>@{{venta.sku}}</td>
					<td>@{{venta.nombre}}</td>
					<td>@{{venta.precio}}</td>
					<td>@{{venta.cantidad}}</td>
					<td>@{{venta.total}}</td>
				</tr>
			</tbody>
		</table>
		
	</div>
</div>

</div>
<!-- fin de div principal -->


@endsection

@push('scripts')
	<script type="text/javascript" src="{{asset('js/apis/apiVenta.js')}}"></script>
	<script type="text/javascript" src="{{asset('js/vue-resource.js')}}"></script>
@endpush