<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Song;
use App\Http\Resources\SongResource;
use App\Http\Resources\SongCollection;
class ApiSongController extends Controller
{
    public function index()
    {
        // Atau bisa menggunakan all() untuk menampilkan semua data
        $songs = Song::paginate(2);
        return new SongCollection($songs);
    }
    public function show($id)
    {
        $song = Song::findOrFail($id);
        return new SongResource($song);
    }
    public function store(Request $request)
    {
        $song = new Song();
        $song->title = $request->input('title');
        $song->artist = $request->input('artist');
        $song->genre = $request->input('genre');
        $song->year = $request->input('year');
        $song->save();

        return response()->json([
            'message' => 'Song created successfully'
        ], 201);
    }
    public function update(Request $request, $id)
    {
        $song = Song::findOrFail($id);
        $song->title = $request->input('title');
        $song->artist = $request->input('artist');
        $song->genre = $request->input('genre');
        $song->year = $request->input('year');
        $song->save();

        return response()->json([
            'message' => 'Song updated successfully'
        ], 200);
    }
    public function destroy($id)
    {
        $song = Song::findOrFail($id);
        $song->delete();

        return response()->json([
            'message' => 'Song deleted successfully'
        ], 200);
    }
}
