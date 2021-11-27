<?php

namespace App\Http\Controllers\backend;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Session;
use Carbon;
use App\Jobs\EmailVerification;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Validator;
class AuthController extends Controller
{
       /**
     * Create a new AuthController instance.
     *
     * @return void
     */

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request){

    	$validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if (! $token = auth()->attempt($validator->validated())) {
            return response()->json(['errors' => $validator->errors()->add('email', 'Email or Password Invalid !')]);
        }

        return $this->createNewToken($token);

    }

    /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request) {

        // return $request;
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|confirmed|min:6',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

    //  return $request;

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->verification_code = sha1(time());
        $user->save();

        // $user = User::create(array_merge(
        //             $validator->validated(),
        //             ['password' => bcrypt($request->password)]
        //         ));

        // return $user->verification_code;
        $data = array(
            'name' =>   $request->name,
            'email' =>  $request->email,
            'verification_code' =>  $user->verification_code,
           );

           EmailVerification::dispatch($data)
            ->delay(now()->addSeconds(2));

        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user
        ], 201);
    }


    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout() {
        auth()->logout();
        Session::forget('auth');
        return response()->json(['message' => 'User successfully signed out']);

    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh() {
        return $this->createNewToken(auth()->refresh());
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function userProfile() {

        // $user = $this->createNewToken(auth()->refresh());

        return response()->json(auth()->user());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken($token){
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }


    public function Password_Reset(Request $request){

        $massage = '';
        $error = '';

        $user_data = User::where('email', $request->email)->first();

        if($user_data){
            $massage = 'validEmail';

            if($user_data && $request->password){

                $this->validate($request, [
                'password' => 'required|string|confirmed|min:6',
                ]);

                $massage = 'sucess';
                $user = User::find($user_data->id);
                $user->update([
                    'password' => bcrypt($request->password)
                 ]);
            }
        }

        else{
            $error = 'we can`t find any user inavlid email';
        }

        return response()->json([
            'massage' => $massage,
            'error' => $error
        ], 200);
    }


    public function verifyUser(Request $request){
        $verification_code = \Illuminate\Support\Facades\Request::get('code');
        $user = User::where(['verification_code' => $verification_code])->first();
        if($user != null){
            $user->is_verified = 1;
            $user->save();

            return response()->json(['massage' => 'Your account is verified. Please login!'], 200);
        }

        return response()->json(['massage' => 'Invalid verification code!'], 200);

    }



}
