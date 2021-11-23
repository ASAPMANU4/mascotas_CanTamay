@extends('layouts.master')
@section('titulo','Ventas')
@section('contenido')

<!-- inicio de div principal-->
<div id="apiVenta">
	<div class="row">
		<div class="col-md-4">

			<div class="input-group mb-3">
				<input type="text" placeholder="Escriba el sku del producto" class="form-control">
				<div class="input-group-append">
				<button class="btn btn-primary">Buscar</button>		
				</div>	
			</div>

		</div>
	</div>
</div>
<!-- fin de div principal -->


@endsection

@push('scripts')
	<script type="text/javascript" src="{{asset('js/apis/apiVenta.js')}}"></script>
	<script type="text/javascript" src="{{asset('js/vue-resource.js')}}"></script>
@endpush