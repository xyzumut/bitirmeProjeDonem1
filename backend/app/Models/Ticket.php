<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Tag;
class Ticket extends Model
{
    use HasFactory;
    protected $fillable=[
        'ticket_text',
        'user_id',
        'column_id',
    ];
    public function tags(){
        return $this->belongsToMany(Tag::class,'tag_ticket_pivot','ticket_id','tag_id');
    }
}
