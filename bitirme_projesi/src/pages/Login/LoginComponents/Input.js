import React, {forwardRef, useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import {FaEye, FaEyeSlash} from 'react-icons/fa'
const InputContainer = styled.div`
    min-width:250px;
    height:35px;
    display:inline-flex;
    border:3px solid #0d6efd;
    input{
        width:${({icon}) => icon === 'yes' ? '80%' : '100%'};
        height:100%;
        border:none;
    }
    input:focus-visible{
        outline:none;
        border:none;
    }
`
const InputIcon = styled.div`
    width:40px;
    height:100%;
    background-color:#0D6EFD;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    svg{
        width:25px;
        height:25px;
        color:white;
    }
`
const Input = forwardRef(({type,onChange,icon='no',style}, ref) => {
    const[show,setShow]=useState(false)
    return(
        <InputContainer style={style}>
            <input style={{padding:10}} type={type} ref={ref} onChange={()=> onChange}/>
            {
                icon === 'yes' &&
                <InputIcon onClick={()=>{
                    setShow(!show)
                    ref.current.type= show ? 'password' : 'text'
                }}>
                    {
                        show === false ? <FaEye/> : <FaEyeSlash/>
                    }
                </InputIcon>
            }
        </InputContainer>
    )
})
export default Input