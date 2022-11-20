import { useEffect } from "react";
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom";
import { ImageCombiner, ImagePaths } from "../../../Configurations/api/resources/api.resourceimage";
import { LanguageType } from "../../../Configurations/globals";
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks/hooks";
import { GetAllCategory } from "../../../Redux/reducers/categoryReducer/action"
import { CategoryCard } from "../../CustomComponent/Cards/CategoryCard";

import style from "./categoryview.module.scss";

export const CategoryView : React.FC = () => {

    const { t } = useTranslation();
    const nav = useNavigate();
    const dispatch = useAppDispatch();
    const { categories } = useAppSelector(state => state.categoryReducer);

    async function fetchCategory(page: number, take: number) {
        await dispatch(GetAllCategory(page, take));
    }

    useEffect(() => {
        if (!categories) {
            fetchCategory(1, 200);
        }
    }, [categories]);

    function onSelectCategory(title: string) {
        nav(title);
    }

    return (
        <div className={style.catview}>
            <h1 className={style.title}>{t(`Catalog`)}</h1>
            <div className={style.wrapper}>
                <div className={style.gridView}>
                    {
                        categories?.pageables?.map(item => {
                            return (
                                <CategoryCard key={item.image} onSelect={() => { onSelectCategory(item.title); } } src={ImageCombiner(ImagePaths.Category, item.image)} 
                                title={localStorage.getItem("lang") == LanguageType.EN ? item.title : item.uaTitle} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}