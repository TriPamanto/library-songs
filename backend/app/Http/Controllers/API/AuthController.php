<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
// use Validator;
class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|confirmed',
            'password_confirmation' => 'required|string'
        ]);

        if ($request->password !== $request->password_confirmation) {
            return response()->json([
                'message' => 'Password confirmation does not match!'
            ], 400);
        }

        $input = $request->only('name', 'email', 'password');
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);

        $success['remember_token'] = $user->createToken('authToken')->plainTextToken;
        $success['name'] = $user->name;

        // $user = new User([
        //     'name' => $request->name,
        //     'email' => $request->email,
        //     'password' => bcrypt($request->password)
        // ]);

        // $user->save();

        return response()->json([
            'success' => true,
            'message' => 'Successfully created user!',
            'data' => $success
        ], 201);
    }
}
