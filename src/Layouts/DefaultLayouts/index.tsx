import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainner } from "./styles";

export function DefaultLayout(){
    return(
        <LayoutContainner>
        <Header/>
        <Outlet/>
        </LayoutContainner>
        
    );
}