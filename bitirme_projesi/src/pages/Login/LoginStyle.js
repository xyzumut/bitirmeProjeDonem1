import styled from "styled-components"
const LoginLayout = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    // background-color:#d4f0f4;
    background-color:inherit;
`
const LoginForm = styled.div`
    margin-top:100px;
    width:450px;
    height:550px;
    border-radius:30px;
    position:relative;
    padding-top:100px;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:rgba(255, 255, 255 ,.4);
    // border:3px solid #0D6EFD;
`
const LoginFormItems = styled.div`
    width:100%;
    height:70%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
`
const LoginInputs = styled.div`
    width:100%;
    height:200px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
`
const Label = styled.label`
    margin-bottom:5px;
`
const LabelText = styled.p`
    font-size:20px;
    margin:5px 0;
    color :#0D6EFD;
`
const KanbanPicture = styled.img`
    height:40%;
`
const LoginFormLogo = styled.div`
    width:150px;
    height:150px;
    background-color:rgba(255,255,255);
    border:3px solid #0D6EFD;
    position:absolute;
    top:-75px;
    left:50%;
    transform:translateX(-50%);
    border-radius:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    *{
        width:70%;
        height:70%;
        color:#0D6EFD;
    }
`

const LoginText = styled.div`
    width:100%;
    height:10%;
`
const WelcomeText = styled.div`
    width:100%;
    height:100%;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#0d6efd;
    font-size:20px;
    &:before{
        position:absolute;
        content:'';
        top:50%;
        transform:translateY(-50%);
        left:10px;
        background-color:#0d6efd;
        width:30%;
        height:2px;
    }
    &:after{
        position:absolute;
        content:'';
        top:50%;
        transform:translateY(-50%);
        right:10px;
        background-color:#0d6efd;
        width:30%;
        height:2px;
    }
`
const buttonStyle = {
    'padding':'6px 100px',
}
export{
    KanbanPicture,
    Label,
    LoginLayout,
    LabelText,
    LoginForm,
    LoginFormItems,
    LoginFormLogo,
    LoginInputs ,
    LoginText,
    WelcomeText,
    buttonStyle
}