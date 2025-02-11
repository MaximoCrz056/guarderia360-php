<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PersonalController; // Añadir controlador PersonalController
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/wservicios', function () {
    return Inertia::render('WelcomeServicios');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // CRUD
    Route::get('/personal', function () {
        return Inertia::render('listar/personal/personal');
    })->name('personal');
    
    Route::get('/personal/create', function () {
        return Inertia::render('FormsCRUD/formPersonal');
    })->name('personal.create');

    Route::post('/personal/save', [PersonalController::class, 'save'])->name('personal.save');

    Route::get('/infantes', function () {
        return Inertia::render('listar/infantes/infantes');
    })->name('infantes');

    Route::get('/servicios', function () {
        return Inertia::render('listar/servicios/servicios');
    })->name('servicios');

    Route::get('/avisos', function () {
        return Inertia::render('listar/avisos/avisos');
    })->name('avisos');

    // Forms
    Route::get('/formPersonal', function () {
        return Inertia::render('FormsCRUD/formPersonal');
    })->name('formPersonal');
});

require __DIR__.'/auth.php';
