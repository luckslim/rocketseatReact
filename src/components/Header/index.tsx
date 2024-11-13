import { HeaderContainer } from "./styles";
import logo from '../../assets/logo.svg'
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";
export function Header(){
    return (
        <HeaderContainer>
            <span><img src={logo} alt="" /></span>
            <nav >
                <NavLink to="/" title="Timer"><Timer size={24}/></NavLink>
                <NavLink to="/history" title="histórico"><Scroll size={24}/></NavLink>
            </nav>
        </HeaderContainer>
    );
}