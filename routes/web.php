<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Di sinilah Anda dapat mendaftarkan rute web untuk aplikasi Anda. Rute-rute
| ini dimuat oleh RouteServiceProvider dalam sebuah grup yang
| berisi grup middleware "web". Sekarang buatlah sesuatu yang hebat!
|
*/

// ========================================================================
// == PERUBAHAN UTAMA DI SINI ==
// Arahkan rute utama ('/') untuk me-render komponen Home.jsx kita.
// ========================================================================
Route::get('/', function () {
    return Inertia::render('Home');
});


// ========================================================================
// == BIARKAN RUTE DI BAWAH INI UNTUK PENGEMBANGAN DI MASA DEPAN ==
// Rute-rute ini (dashboard, profile, login, dll.) tidak akan
// mengganggu halaman utama Anda, tapi berguna jika nanti klien
// meminta fitur login atau member area.
// ========================================================================
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
