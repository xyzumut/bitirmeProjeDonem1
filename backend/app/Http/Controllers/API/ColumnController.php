<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Column;
use App\Models\Ticket;
use App\Models\TicketComment;

class ColumnController extends Controller
{
    public function getColumnData (){
        $columnDatas = Column::get();
        $ticketDatas = Ticket::with('tags')->get(); 
        $ticketCommentLength = TicketComment::select('id', 'ticket_id')->get();
        return response([
            'columnDatas'=>$columnDatas,
            'ticketDatas' => $ticketDatas,
            'ticketCommentLengths' => $ticketCommentLength 
        ]);
    }
}