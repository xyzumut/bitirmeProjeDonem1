import React from "react";
import styled from 'styled-components'
import { NavLink, useNavigate } from "react-router-dom";
import { HomeOutlined, TableOutlined, CloseOutlined, SettingFilled } from "@ant-design/icons";
import { HeaderContainer, Header_} from './Header.style'
import { useAuth } from "../../context/AuthContext";
const Header = () => {
    
    const userAuthContext = useAuth()
    const navigate = useNavigate()

    return(
        <HeaderContainer>
            <Header_>
                <NavLink 
                    className={'headerNavLink'}
                    to={'/anasayfa'}
                >
                    <HomeOutlined/>
                </NavLink>
                <NavLink 
                    className={'headerNavLink'}
                    to={'/kanban'}
                >
                    <TableOutlined/>
                </NavLink>
                <NavLink className={'headerNavLink'} to={'/ayarlar'}><SettingFilled/></NavLink>
                <button className={'headerNavLink'} style={{cursor:'pointer'}} onClick={()=>{
                    sessionStorage.clear()
                    userAuthContext.setIsLogin(false)
                    userAuthContext.setUserData(undefined)
                    navigate('/login')
                }} ><CloseOutlined/></button>

            </Header_>
        </HeaderContainer>
    )
}
export default Header