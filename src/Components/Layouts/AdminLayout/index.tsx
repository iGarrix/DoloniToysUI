import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks/hooks";
import { accountSlice } from "../../../Redux/reducers/accountReducer/accountSlice";

import style from "./style.adminalayout.module.scss";

export const AdminLayout : React.FC = () => {

    const history = useLocation();
    const dispatch = useAppDispatch();
    const nav = useNavigate();

    const { auth } = useAppSelector(state => state.accountReducer);

    function onLogoutUser() {
        dispatch(accountSlice.actions.onLogout());
        nav("/");
    }
    
    return (
        <section className={`${style.adminLayoutContainer}`}>
            <div className={`${style.headerWrapper}`}>
                <header className={`${style.headerContainer}`}>
                    <div className={`${style.infoBlock}`}>
                        <img alt="image" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                        className={`${style.avatar}`} />
                        <div>
                            <h1 className={`${style.username}`}>{auth?.username}</h1>
                            <p className={`${style.email}`}>{auth?.email}</p>
                        </div>
                    </div>
                    <ul className={`${style.listContainer}`}>
                        <li className={`${style.item} ${history.pathname === "/for-admins" || history.pathname.includes("product") ? style.selected : null}`} onClick={() => {nav("/for-admins")}}>Products</li>
                        <li className={`${style.item} ${history.pathname.includes("categ")  ? style.selected : null}`} onClick={() => {nav("categories")}}>Categories</li>
                        <li className={`${style.item} ${history.pathname.includes("reports") ? style.selected : null}`} onClick={() => {nav("reports")}}>Contacts</li>
                        <div className={`${style.external}`}>
                            <li className={`${style.exititem}`} onClick={() => {nav("/")}}>Exit</li>
                            <li className={`${style.exititem}`} onClick={onLogoutUser}>Logout</li>
                        </div>
                    </ul>
                </header>
            </div>
            <main className={`${style.contentContainer}`}>
                <Outlet />
            </main>
        </section>
    )
}