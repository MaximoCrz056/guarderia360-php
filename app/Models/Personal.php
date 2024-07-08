<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Personal extends Model
{
    use HasFactory;
    protected $table = 'personals';
    protected $fillable = [
        'name',
        'middlename',
        'lastname',
        'handle',
        'status',
        'photo'
    ];
}
