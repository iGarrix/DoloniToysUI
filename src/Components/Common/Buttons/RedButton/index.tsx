import { IRedButton } from "./types.redbutton"

import style from "./style.redbutton.module.scss";

export const RedButton : React.FC<IRedButton> = ({...props}) => {
    return (
        <button className={`${style.redbutton}`} onClick={props.onClick}>{props.title}</button>
    )
}