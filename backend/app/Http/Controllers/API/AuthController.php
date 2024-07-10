<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
class AuthController extends Controller
{
    // public function register(Request $request)
    // {
    //     $request->validate([
    //         'name' => 'required|string',
    //         'email' => 'required|email|unique:users',
    //         'password' => 'required|string|confirmed',
    //         'password_confirmation' => 'required|string'
    //     ]);

    //     if ($request->password !== $request->password_confirmation) {
    //         return response()->json([
    //             'message' => 'Password confirmation does not match!'
    //         ], 400);
    //     }

    //     $input = $request->only('name', 'email', 'password');
    //     $input['password'] = bcrypt($input['password']);
    //     $user = User::create($input);

    //     $success['remember_token'] = $user->createToken('authToken')->plainTextToken;
    //     $success['name'] = $user->name;

    //     return response()->json([
    //         'success' => true,
    //         'message' => 'Successfully created user!',
    //         'data' => $success
    //     ], 201);
    // }
    // public function login(Request $request)
    // {
    //     $request->validate([
    //         'email' => 'required|email',
    //         'password' => 'required|string'
    //     ]);

    //     $credentials = request(['email', 'password']);

    //     if (!auth()->attempt($credentials)) {
    //         return response()->json([
    //             'message' => 'Unauthorized'
    //         ], 401);
    //     }

    //     $user = $request->user();

    //     $success['remember_token'] = $user->createToken('authToken')->plainTextToken;
    //     $success['name'] = $user->name;

    //     return response()->json([
    //         'success' => true,
    //         'message' => 'Successfully logged in!',
    //         'data' => $success
    //     ], 200);
    // }


    public function register(Request $request)
    {
        // Validate the request
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors(),
            ], 422);
        }

        // Create the user
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // Return a successful response
        return response()->json([
            'success' => true,
            'message' => 'User registered successfully',
            'token' => $user->createToken('auth_token')->plainTextToken,
        ], 201);
    }

    public function index()
    {
        $users = User::all();

        return response()->json([
            'success' => true,
            'users' => $users,
        ], 200);
    }

    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8',
        ]);

        if($validator->fails()){
            return response()->json([
                'success' => false,
                'errors' => $validator->errors(),
            ], 422);
        }

        if(!Auth::attempt($request->only('email', 'password'))){
            return response()->json([
                'success' => false,
                'message' => 'email or password is incorrect',
            ], 401);
        }

        $user = User::where('email', $request['email'])->first();
        return response()->json([
            'success' => true,
            'message' => 'User logged in successfully',
            'token' => $user->createToken('auth_token')->plainTextToken,
        ], 200);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'status' => true,
            'message' => 'Logout successful',
        ], 200);
    }


}
