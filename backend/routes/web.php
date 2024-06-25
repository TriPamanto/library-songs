<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/song/{id}', function(string $id){
    return 'Song Id: '.$id;
});

use App\Models\Song;
use Illuminate\Http\Request;

// Route untuk menampilkan index view dengan data buku
// Route::get('/songs', function(){
//     $songs = Song::all();
//     return view('songs.index', ['songs' => $songs]);
// })->name('songs.index');

// // Route untuk menampilkan form tambah buku
// Route::get('/songs/create', function(){
//     return view('songs.create');
// })->name('songs.create');

// // Route untuk menyimpan data buku yang baru ditambahkan
// Route::post('/songs', function(Request $request){
//     $validatedData = $request->validate([
//         'title'=>'required',
//         'artist'=>'required',
//         'genre'=>'required',
//         'year'=>'required|numeric',
//     ]);

//     $song = new Song();
//     $song->title = $validatedData['title'];
//     $song->artist = $validatedData['artist'];
//     $song->genre = $validatedData['genre'];
//     $song->year = $validatedData['year'];
//     $song->save();

//     return redirect()->route('songs.index');
// })->name('songs.store');

// // Route untuk menampilkan form edit buku
// Route::get('/songs/{id}/edit', function ($id){
//     $song = Song::findOrFail($id); // Mengambil data Buku bedasarkan ID
//     return view('songs.edit', ['song' => $song]);
// })->name('songs.edit');

// // Route untuk menyimpan data buku yang telah diubah
// Route::put('/song/{id}', function (Request $request, $id){
//     $validatedData = $request->validate([
//         'title'=>'required',
//         'artist'=>'required',
//         'genre'=>'required',
//         'year'=>'required|numeric',
//     ]);

//     $song = Song::findOrFail($id); // Mengambil data buku berdasarkan ID
//     $song->title = $validatedData['title'];
//     $song->artist = $validatedData['artist'];
//     $song->genre = $validatedData['genre'];
//     $song->year = $validatedData['year'];
//     $song->save();

//     return redirect()->route('songs.index');
// })->name('songs.update');

// // Route untuk menghapus data
// Route::delete('/songs/{id}', function ($id){
//     $song = Song::findOrFail($id); // Mengambil data buku berdasarkan ID
//     $song->delete();

//     return redirect()->route('songs.index');
// })->name('songs.destroy');

// Route untuk menampilkan detail buku

use App\Http\Controllers\SongController;

Route::get('/songs', [SongController::class,'index'])->name('songs.index');

Route::get('/songs/create', [SongController::class,'create'])->name('songs.create');
Route::post('/songs', [SongController::class,'store'])->name('songs.store');
Route::get('/songs/{id}/edit', [SongController::class,'edit'])->name('songs.edit');
Route::put('/songs/{id}', [SongController::class,'update'])->name('songs.update');
Route::delete('/songs/{id}', [SongController::class,'destroy'])->name('songs.destroy');

use App\Models\User;
use App\Models\UserProfile;
use App\Models\Borrowing;

Route::get('/user-profile/{user_id}', function(string $id){
    $users = User::find($id);
    echo $users->name;
    echo '<br>';
    echo $users->profile->address;
});

Route::get('/borrowing', function(){
    $borrowings = Borrowing::all();
    foreach($borrowings as $key => $value){
        echo "Song Title: ".$value->song->title.' | User :' .$value->user->name;
        echo '<br>';
    }
});

Route::get('/borrower/{user_id}', function(string $id){
    $borrower = User::find($id);
    echo "User Name: ".$borrower->name;
    echo '<br>';

    foreach($borrower->borrowings as $key => $value){
        echo "Song Title: ".$value->song->title;
        echo '<br>';
    }
});

Route::get('/song-borrow/{song_id}', function(string $id){
    $song = Song::find($id);
    echo "Song Title: ".$song->title;
    echo '<br>';

    foreach($song->borrowings as $key => $value){
        echo "User Name: ".$value->user->name;
        echo '<br>';
    }
});
