import styled from "styled-components"
import React from "react"

const HeaderContainer = styled.div`
    width: 100%;
    height: 64px;
    margin-bottom:20px;
`
const Header_ = styled.header`
    background-color:#404258;
    transition:.5s all;
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-direction:row;
    width:100%;
    height:30px;
    span{
        width:20px;
        height:20px;
        display:flex;
        justify-content:center;
        align-items:center;
        transition:.5s all;
        font-size:20px;
    }
    &:hover{
        height:64px;
        background-color:#404258;
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        align-items:center;
        span{
            font-size:30px;
            width:40px;
            height:40px;
        }
    }
`
export{
    HeaderContainer,
    Header_
}