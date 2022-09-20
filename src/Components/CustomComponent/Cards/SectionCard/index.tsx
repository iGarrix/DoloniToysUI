import { ISectionCard } from "./types.sectcard";

import style from "./style.sectcard.module.scss";
import { SectCardType } from "../../../../Configurations/globals";

const baby = require('../../../../Assets/Icons/baby1.png')
const baby1 = require('../../../../Assets/Icons/baby2.png')
const baby2 = require('../../../../Assets/Icons/baby3.png')

export const SectionCard : React.FC<ISectionCard> = ({...props}) => {
    return (
        <div className={`${style.section_card}`} onClick={props.onClick}>
            {
                props.variant === SectCardType.Baby ?
                <img alt="image" src={baby} className={`${style.sect_image}`} /> :
                props.variant === SectCardType.Boys ?
                <img alt="image" src={baby1} className={`${style.sect_image}`} /> :
                props.variant === SectCardType.Girls ?
                <img alt="image" src={baby2} className={`${style.sect_image}`} /> : ""
            }
            <h1 className={`${style.title}`}>{props.title}</h1>
        </div>
    )
}