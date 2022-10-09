import { IProductCardProps } from "./types.productcard"

import style from "./style.productcard.module.scss";
import { ErrorImage } from "../../../../Configurations/api/resources/api.resourceimage";

export const ProductCard : React.FC<IProductCardProps>= ({...props}) => {
    
    return (
        <div className={`${style.productCardContainer}`} onClick={props.onClick}>
            <img alt="imageProduct" src={props.src} className={`${style.img}`} onError={(tg: any) => { tg.target.src = ErrorImage}} />
            <h1 className={`${style.title}`}>{props.title}</h1>
        </div>
    )
}