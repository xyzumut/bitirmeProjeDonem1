<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'username'=>'required|string|max:255|unique:users',
            'email'=>'email|max:255|unique:users',
            'password'=>'required|max:255',
            'user_avatar'=>'string|max:255',
            'user_type'=>'string|max:255'
        ];
    }
    public function messages(){
        return [
            
            'username.required'=>'Username Zorunludur',
            'username.unique'=>'Username Daha Önce Alınmış',
            'username.max'=>'Username Azami 255 Karakter Olmalı',

            'password.required'=>'Password Zorunludur',
            'password.max'=>'Password Azami 255 Karakter Olmalı',

            'email.unique'=>'Bu email adresi daha önce alınmış.',
            'email.max'=>'Email Azami 255 Karakter Olmalı',
            'email.email'=>'Email adresi formati yanlis',

        ];
    }

}
