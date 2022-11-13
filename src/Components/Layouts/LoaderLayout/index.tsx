import { Outlet } from "react-router-dom"
import { useAppSelector } from "../../../Redux/hooks/hooks"

export const LoaderLayout : React.FC = () => {

    const state = useAppSelector(state => state);

    return (
        <div className="relative">
            {
                state.accountReducer.isLoading || state.categoryReducer.isLoading || state.productReducer.isLoading || state.contactReducer.isLoading ?
                <div className="fixed top-0 left-0 w-screen h-[4px] bg-blue-500 z-[10000]">
                </div> : null
            }
            <Outlet />
        </div>
    )
}