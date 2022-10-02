import { Outlet } from "react-router-dom"
import { MainFooter } from "../../CustomComponent/Footers/MainFooter"
import { MainHeader } from "../../CustomComponent/Headers/MainHeader"

export const MainLayout: React.FC = () => {
    return (
        <div className="">
            <MainHeader />
            <Outlet/>
            <MainFooter />
        </div>
    )
}