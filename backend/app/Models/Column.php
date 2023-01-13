<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Column extends Model
{
    use HasFactory;
    protected $fillable = [
        'column_name',
    ];
    public $timestamps = false;

    public function tickets(){
        $data1 = $this->hasMany(Ticket::class);
        return $data1 ;
    }
}
// Countries => Column | Articel => ticket | User => Tag 