<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class producto extends Model
{
    protected $table='productos';

    protected $primaryKey='sku';

    public $incremeting=false;

    public $timestamps=false;

    protected $fillable=[
        'sku',
        'nombre',
        'precio_venta',
        'cantida'
    ]; 

}
