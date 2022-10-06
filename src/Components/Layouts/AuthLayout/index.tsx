import { ReactNode } from "react"
import { Navigate, Outlet } from "react-router-dom"

export interface IAuthLayout {
    isPredicate: boolean,
    elseReturn: string,
    children: any,
}

export const AuthLayout : React.FC<IAuthLayout> = ({...props}) => {

    return (
        props.isPredicate ? props.children : <Navigate to={props.elseReturn} replace />
    )
}