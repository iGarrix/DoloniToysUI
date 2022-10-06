
import style from "./style.defbutton.module.scss";
import { IDefButtonProps } from "./types.defbutton";

export const DefButton : React.FC<IDefButtonProps> = ({...props}) => {
    
    return (
        <button onClick={props.onClick}
        className={`${style.defbuttonContainer}`}>{props.title}</button>
    )
}