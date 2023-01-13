<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TicketImage extends Model
{
    use HasFactory;
    protected $fillable = [
        'image_path',
        'ticket_id'
    ];
    public $timestamps = false;

}
