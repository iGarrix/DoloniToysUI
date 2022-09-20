import { IRecommendCard } from "./types.reccard"

import style from "./style.reccard.module.scss";
import { RecCardType } from "../../../../Configurations/globals";

const gift = require('../../../../Assets/Icons/gift.png');
const like = require('../../../../Assets/Icons/hearts.png');
const geog = require('../../../../Assets/Icons/geography.png');

export const RecommendCard : React.FC<IRecommendCard> = ({...props}) => {
    return (
        <div className={`${style.reccard} ${props.variant === RecCardType.Gift ? "bg-bluesky-100" : props.variant === RecCardType.Like ? "bg-banana-100" : props.variant === RecCardType.Geograph ? "bg-lightgreen-100" : ""}`}>
            {props.variant === RecCardType.Gift ? 
             <img alt="icon" src={gift} className={`${style.image}`} /> : 
            props.variant === RecCardType.Like ? 
            <img alt="icon" src={like} className={`${style.image}`} /> : 
            props.variant === RecCardType.Geograph ? 
            <img alt="icon" src={geog} className={`${style.image}`} /> : 
            null}
            <h1 className={`${style.title}`}>{props.title}</h1>
        </div>
    )
}