import React, { useRef, useState } from "react";
import {Input} from './LoginComponents/allLoginComponents'
import {Button} from 'antd'
import {FaUser} from 'react-icons/fa'
import {Label, LabelText, LoginLayout,
        LoginForm, LoginFormItems, LoginFormLogo, LoginInputs,
        WelcomeText , LoginText, buttonStyle } from './LoginStyle'
import { loginAuthUserAPI } from "../../services/services";
import { myNotification } from '../../components/AllComponents'
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
    
    const userAuthContext = useAuth()
    const usernameRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
    const userAuth = async () => {
        setLoading(true)
        const response = await loginAuthUserAPI(usernameRef.current.value, passwordRef.current.value)
        if (response.status == true) {
            myNotification({description:'Giriş Başarılı',type:'success'})
            console.log(response.result)
            sessionStorage.setItem('username',response.result.username)
            sessionStorage.setItem('email',response.result.email)
            sessionStorage.setItem('password',response.result.password)
            sessionStorage.setItem('user_type',response.result.user_type)
            sessionStorage.setItem('user_avatar',response.result.user_avatar)
            sessionStorage.setItem('id',response.result.id)
            sessionStorage.setItem('isLogin',true)

            userAuthContext.setUserData({
                username:response.result.username,
                email:response.result.email,
                password:response.result.password,
                user_type:response.result.user_type,
                user_avatar:response.result.user_avatar,
                id:response.result.id,
            })
            userAuthContext.setIsLogin(true)

            navigate('/anasayfa')
        }
        else{
            myNotification({description:'Giriş Başarısız', message:response.result, type:'error', duration:1.5})
        }
        setLoading(false)
    }

    return(
        <LoginLayout>
            <LoginForm>
                <LoginFormLogo>
                    <FaUser/>
                </LoginFormLogo>
                <LoginText>
                    <WelcomeText>
                        Hoşgeldiniz
                    </WelcomeText>
                </LoginText>
                <LoginFormItems>
                    <LoginInputs>
                        <Label>
                            <LabelText>Kullanıcı Adı</LabelText>
                            <Input type={'text'} ref={usernameRef}/>
                        </Label>
                        <Label>
                            <LabelText>Şifre</LabelText>
                            <Input type={'password'} icon={'yes'} ref={passwordRef} />
                        </Label>
                    </LoginInputs>
                    <Button style={buttonStyle} type="primary" loading={loading} onClick={() => userAuth()}>Giriş Yap</Button>
                    {/* <LoginButton onClick={()=>userAuth()}>Giriş Yap</LoginButton> */}
                    {/* <KanbanPicture src={kanbanPicture}  alt={''}/> */}
                </LoginFormItems>
            </LoginForm>
        </LoginLayout>
    )
}
export default Login