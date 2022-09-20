import { Outlet } from "react-router-dom"

export const LoaderLayout : React.FC = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}