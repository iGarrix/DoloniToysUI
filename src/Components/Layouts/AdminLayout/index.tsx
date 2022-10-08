import { faArrowLeft, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../../Redux/hooks/hooks";
import { accountSlice } from "../../../Redux/reducers/accountReducer/accountSlice";

import style from "./style.adminalayout.module.scss";

export const AdminLayout : React.FC = () => {

    const history = useLocation();
    const dispatch = useAppDispatch();
    const nav = useNavigate();

    function onLogoutUser() {
        dispatch(accountSlice.actions.onLogout());
        nav("/");
    }
    
    return (
        <section className={`${style.adminLayoutContainer}`}>
            <header className={`${style.header}`}>
                <ul className={`${style.list}`}>
                    <li className={`${style.item} ${history.pathname === "/for-admins" ? style.selected : null}`} onClick={() => {nav("/for-admins")}}>Products</li>
                    <li className={`${style.item} ${history.pathname.includes("reports") ? style.selected : null}`} onClick={() => {nav("reports")}}>Reports</li>
                </ul>
                <div className={`${style.logoutContainer}`}>
                    <FontAwesomeIcon icon={faArrowLeft} className={`${style.back}`} onClick={() => {nav("/")}}/>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className={`${style.logout}`} onClick={onLogoutUser}/>
                </div>
            </header>
            <Outlet />
        </section>
    )
}