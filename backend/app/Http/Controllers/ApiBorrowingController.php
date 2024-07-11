<?php

namespace App\Http\Controllers;

use App\Models\Borrowing;
use Illuminate\Http\Request;

class ApiBorrowingController extends Controller
{
    // Method untuk mendapatkan semua data peminjaman, termasuk informasi pengguna dan lagu
    public function index()
    {
        $borrowings = Borrowing::with(['user', 'song'])->get();
        return response()->json($borrowings);
    }

    // Method untuk menyimpan data peminjaman baru
    public function store(Request $request)
    {
        // Validasi input
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'song_id' => 'required|exists:songs,id',
        ]);

        // Membuat data peminjaman baru
        $borrowing = Borrowing::create($request->all());

        return response()->json($borrowing, 201);
    }

    // Method untuk menampilkan detail data peminjaman berdasarkan ID
    public function show($id)
    {
        // Mencari data peminjaman berdasarkan ID
        $borrowing = Borrowing::find($id);
        if (is_null($borrowing)) {
            return response()->json(['message' => 'Borrowing not found'], 404);
        }

        return response()->json($borrowing);
    }

    // Method untuk memperbarui data peminjaman berdasarkan ID
    public function update(Request $request, $id)
    {
        // Validasi input
        $request->validate([
            'user_id' => 'exists:users,id',
            'song_id' => 'exists:songs,id',
        ]);

        // Mencari data peminjaman berdasarkan ID
        $borrowing = Borrowing::find($id);
        if (is_null($borrowing)) {
            return response()->json(['message' => 'Borrowing not found'], 404);
        }

        // Memperbarui data peminjaman
        $borrowing->update($request->all());

        return response()->json($borrowing);
    }

    // Method untuk menghapus data peminjaman berdasarkan ID
    public function destroy($id)
    {
        // Mencari data peminjaman berdasarkan ID
        $borrowing = Borrowing::find($id);
        if (is_null($borrowing)) {
            return response()->json(['message' => 'Borrowing not found'], 404);
        }

        // Menghapus data peminjaman
        $borrowing->delete();

        return response()->json(null, 204);
    }
//     // public function index()
//     // {
//     //     return Borrowing::all();
//     // }
//     public function index()
// {
//     $borrowings = Borrowing::with(['user', 'song'])->get();
//     return response()->json($borrowings);
// }


//     public function store(Request $request)
//     {
//         $request->validate([
//             'user_id' => 'required|exists:users,id',
//             'song_id' => 'required|exists:songs,id',
//         ]);

//         $borrowing = Borrowing::create($request->all());

//         return response()->json($borrowing, 201);
//     }

//     public function show($id)
//     {
//         $borrowing = Borrowing::find($id);
//         if (is_null($borrowing)) {
//             return response()->json(['message' => 'Borrowing not found'], 404);
//         }

//         return response()->json($borrowing);
//     }

//     public function update(Request $request, $id)
//     {
//         $request->validate([
//             'user_id' => 'exists:users,id',
//             'song_id' => 'exists:songs,id',
//         ]);

//         $borrowing = Borrowing::find($id);
//         if (is_null($borrowing)) {
//             return response()->json(['message' => 'Borrowing not found'], 404);
//         }

//         $borrowing->update($request->all());

//         return response()->json($borrowing);
//     }

//     public function destroy($id)
//     {
//         $borrowing = Borrowing::find($id);
//         if (is_null($borrowing)) {
//             return response()->json(['message' => 'Borrowing not found'], 404);
//         }

//         $borrowing->delete();

//         return response()->json(null, 204);
//     }
}
