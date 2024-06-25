<?php

namespace App\Http\Controllers;
use App\Models\Song;
use Illuminate\Http\Request;

class SongController extends Controller
{
    public function index()
    {
        $songs = Song::all();
        return view('songs.index', ['songs' => $songs]);
    }
    public function create()
    {
        return view('songs.create');
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title'=>'required',
            'artist'=>'required',
            'genre'=>'required',
            'year'=>'required|numeric',
        ]);

        $song = new Song();
        $song->title = $validatedData['title'];
        $song->artist = $validatedData['artist'];
        $song->genre = $validatedData['genre'];
        $song->year = $validatedData['year'];
        $song->save();

        return redirect()->route('songs.index');
    }
    public function edit($id)
    {
        $song = Song::findOrFail($id);
        return view('songs.edit', ['song' => $song]);
    }
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'title'=>'required',
            'artist'=>'required',
            'genre'=>'required',
            'year'=>'required|numeric',
        ]);

        $song = Song::findOrFail($id);
        $song->title = $validatedData['title'];
        $song->artist = $validatedData['artist'];
        $song->genre = $validatedData['genre'];
        $song->year = $validatedData['year'];
        $song->save();

        return redirect()->route('songs.index');
    }
    public function destroy($id)
    {
        $song = Song::findOrFail($id);
        $song->delete();

        return redirect()->route('songs.index');
    }
}
