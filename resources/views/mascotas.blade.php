@extends('layouts.master')
@section('titulo','CRUD Mascotas')
@section('contenido')
	<h1>Hola mundo</h1>
@endsection

@push('scripts')
	<script type="text/javascript" src="{{asset('js/mascotas.js')}}"></script>
@endpush