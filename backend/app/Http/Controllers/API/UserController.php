<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;
class UserController extends Controller
/* POST ve PUT isteklerinde başarılı durumda errors=false döndür, eğer rules üzerinde uymayan bir şey varsa errors nesne dönüyor zaten */

{
    public function addUser(UserRequest $request){
        $addedUser = User::create($request->all());
        return response([
            'addedUser'=>$addedUser,
            'errors'=>false
        ]);
    }
    public function loginAuthUser(Request $request){

        if (isset($request->username) == true  && isset($request->password) == true) {
            $username = $request->username;
            $password = $request->password;
            $result = User::where('username',$username)->first();

            if ($result != null && $result->password == $password) {
                return response([
                    'result'=>$result,
                    'status'=>true
                ]);
            }
            else if($result != null && $result->password != $password){
                return response(['result'=>'Şifre Yanlış', 'status'=>false]);
            }
            else{
                return response(['result'=>'Kullanıcı Bulunamadı', 'status'=>false]);
            }
        }
        else{
            return response([
                'result'=>'Kullanıcı Adı ve Şifre Göndermek Zorunludur',
                'status'=>false
            ]); 
        }
    }

    public function updateUser(Request $request, $id){

        $user = User::find($id);

        if ($user!=null ) {
            try {
                $status = $user->update($request->all());
            } 
            catch (\Throwable $th) {
                return response([
                    'status'=>false,
                    'errors'=>[
                        'username'=>'Username Daha Önce Alınmış'
                    ],
                    'message'=>'Username Daha Önce Alınmış'
                ]);
            }
            return response([
                'status'=>$status,//bool
                'newUserDatas'=>$user,
                'errors'=>false//bool
            ]);
        }
        else{
            return response([
                'status'=>false,
                'errors'=>[
                    'result'=>'Kullanıcı Bulunamadı'
                ],
                'messages'=>'Kullanıcı Bulunamadı'
            ]);
        }
    }
}
