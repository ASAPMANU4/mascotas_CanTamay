<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Raza extends Model
{
protected $table='razas';
    protected $primaryKey='id_razas';

    //define si la llave primaria es o no un numero auto incrementable
    public $incrementing=false;
    //activar o desactrivar etiquetas de tiempo
    public $timestamps=false;

    public $fillable=[
        'id_razas',
        'raza',  
    ];
}
