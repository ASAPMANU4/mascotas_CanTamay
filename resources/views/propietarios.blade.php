@extends('layouts.master')
@section('contenido')
	<h1>CRUD propietarios<h1>
@endsection
@push('scripts')
<script type="text/javascript" src="{{asset('js/apis/propietarios.js')}}"></script>
@endpush
