<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mascota extends Model
{
   protected $table='mascotas';
    protected $primaryKey='id_mascota';

    //define si la llave primaria es o no un numero auto incrementable
    public $incrementing=false;
    //activar o desactrivar etiquetas de tiempo
    public $timestamps=false;

    public $fillable=[
        'id_mascota',
        'nombre',
        'edad',
        'peso',
        'genero',
        'id_especie',
        'id_propietario',
        'id_raza',
        
    ];
}
