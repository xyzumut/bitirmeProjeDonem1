<?php

use App\Http\Controllers\Api\ColumnController;
use App\Http\Controllers\API\UserController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('user')->group(function(){
    Route::post('/', [UserController::class,'addUser']);
    Route::get('/', [UserController::class,'loginAuthUser']);
    Route::put('/{id}', [UserController::class,'updateUser']);
});
Route::get('/column', [ColumnController::class,'getColumnData']);
