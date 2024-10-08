<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Direccion extends Model
{
    use HasFactory;
    
    protected $fillable = ['contacto_id', 'direccion'];

    public function contacto(){
        return $this->belongsTo(Contacto::class);
    }
}
