<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\ApiBorrowingController;
use App\Http\Controllers\ApiUserController;

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

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/songs', [ApiSongController::class, 'index']);
Route::post('/songs', [ApiSongController::class, 'store']);
Route::get('/songs/{id}', [ApiSongController::class, 'show']);
Route::put('/songs/{id}', [ApiSongController::class, 'update']);
Route::delete('/songs/{id}', [ApiSongController::class, 'destroy']);

Route::get('/borrowings', [ApiBorrowingController::class, 'index']);
Route::post('/borrowings', [ApiBorrowingController::class, 'store']);
Route::get('/borrowings/{id}', [ApiBorrowingController::class, 'show']);
Route::put('/borrowings/{id}', [ApiBorrowingController::class, 'update']);
Route::delete('/borrowings/{id}', [ApiBorrowingController::class, 'destroy']);

Route::get('/users', [ApiUserController::class, 'index']);
Route::post('/users', [ApiUserController::class, 'store']);
Route::get('/users/{id}', [ApiUserController::class, 'show']);
Route::put('/users/{id}', [ApiUserController::class, 'update']);
Route::delete('/users/{id}', [ApiUserController::class, 'destroy']);

