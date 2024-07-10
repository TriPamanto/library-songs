<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/users', [AuthController::class, 'index']);

});
// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

use App\Http\Controllers\ApiSongController;

Route::get('/songs', [ApiSongController::class, 'index']);
Route::post('/songs', [ApiSongController::class, 'store']);
Route::get('/songs/{id}', [ApiSongController::class, 'show']);
Route::put('/songs/{id}', [ApiSongController::class, 'update']);
Route::delete('/songs/{id}', [ApiSongController::class, 'destroy']);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

