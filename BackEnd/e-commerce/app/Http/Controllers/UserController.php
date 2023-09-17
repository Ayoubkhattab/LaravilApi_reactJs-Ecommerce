<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Auth;
use Illuminate\Http\Request;


class UserController extends Controller
{
    public function login(LoginRequest $request)
    {

        $c = $request->validated();
        if (!Auth::attempt($c)) {
            return response()->json([
                'message' => 'incorrect in email or password'
            ], 422);
        }

        $user = Auth::user();
        $token = $user->createToken('auth-token')->plainTextToken;
        return response()->json([
            'user' => auth()->user(),
            'access_token' => $token,
            'message' => 'login Successfully '
        ]);
    }


    function signUp(SignupRequest $request)
    {
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        ]);

        $token = $user->createToken('auth-token')->plainTextToken;

        return response()->json([
            'user' => $user,
            'access_token' => $token,
            'message' => 'Successfully SignUp'
        ]);

    }

    public function logout(Request $request)
    {

        $request->user()->currentAccessToken()->delete();
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('', 204);
        // $request->user()->token()->revoke();
        // return response()->json(['message' => 'Logged out successfully']);
    }
    //
    // if ($request->user()) {
    //     $request->user()->token()->revoke();
    //     return response()->json(['message' => 'Logged out successfully']);
    // } else {
    //     return response()->json(['message' => 'User not authenticated'], 401);
    // }

    public function getAllUsers()
    {
        $users = User::all();
        if ($users) {
            return response()->json([
                'status' => 'success',
                'user' => $users,
                'message' => 'successfully'
            ]);
        } else
            return response()->json([
                'message' => 'not found users'
            ]);
    }
}