<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TicketComment extends Model
{
    use HasFactory;
    protected $fillable = [
        'ticket_comment',
        'ticket_id'
    ];
    public $timestamps = false;
}
