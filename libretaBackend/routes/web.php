<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactoController;

Route::apiResource('contactos', ContactoController::class);
Route::get('/', function () {
    return view('welcome');
});
