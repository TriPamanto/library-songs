<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    use HasFactory;
    protected $table = 'songs';
    protected $primaryKey = 'id';
    protected $fillabel = [
        'title',
        'artist',
        'genre',
        'year',
    ];
    public function borrowings()
    {
        return $this->hasMany('App\Models\Borrowing');
    }
}
