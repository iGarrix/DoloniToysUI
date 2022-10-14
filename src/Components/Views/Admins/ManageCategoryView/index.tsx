import moment from "moment";
import { useEffect, useState, useTransition } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ErrorImage, ImageCombiner, ImagePaths } from "../../../../Configurations/api/resources/api.resourceimage";
import { useAppDispatch, useAppSelector } from "../../../../Redux/hooks/hooks";
import { GetAllCategory, RemoveCategory } from "../../../../Redux/reducers/categoryReducer/action";
import { ICategory } from "../../../../Redux/reducers/categoryReducer/types";
import { Paginator } from "../../../Common/Paginator";
import style from "./style.managecategory.module.scss";

export const ManageCategoryView : React.FC = () => {
    const {t} = useTranslation();
    const { categories, isLoading, error } = useAppSelector(state => state.categoryReducer);
    const nav = useNavigate();
    const dispatch = useAppDispatch();
    const [isPending, startTransition] = useTransition();
    const [searchParams, setSearchParams] = useSearchParams();
    const [initPage, setPage] = useState(() => {
        const currentPage = searchParams.get("page");
        if (currentPage) {
            return Number.parseInt(currentPage) - 1;
        }

        return 0;
    });

    async function fetchCategory(page: number, take: number) {
        await dispatch(GetAllCategory(page, take));
    }

    useEffect(() => {
        if (searchParams) {
            const currentPage = searchParams.get("page");
            if (currentPage) {
                fetchCategory(Number.parseInt(currentPage), 10);
            }
        }
    }, [])

    const onPaginate = async (event: number) => {
        startTransition(() => {
            setSearchParams({ page: `${event}` });
            fetchCategory(event, 10);
        }); 
    }

    async function onRemoveCategory(item: ICategory) {
        await dispatch(RemoveCategory(item));
        const currentPage = searchParams.get("page");
        fetchCategory(currentPage ? Number.parseInt(currentPage) : 1, 10);
    }   

    return (
        <div className={`${style.container}`}>
            <div className={`${style.infoContainer}`}>
                <h1 className={`${style.message}`}>{t("There are")} {categories?.total ? categories.total : "none"} {t("pages and")} {categories ? categories.totalObj : "none"} {t("categories,")} <span className={`${style.link}`} onClick={() => {nav("../create-category")}}>{t("Create")}</span></h1>
            </div>
            {
                error ?
                    <div className={`${style.errorContainer}`}>
                        <h1 className={`${style.message}`}>{error}</h1>
                    </div> :
                    <table className={`${style.table}`}>
                        <thead className={`${style.headerContainer}`}>
                            <tr className={`${style.block}`}>
                                <th className={`${style.title}`}>{t("Title")}</th>
                                <th className={`${style.title}`}>{t("Create time")}</th>
                                <th className={`${style.title}`}>{t("Delete")}</th>
                            </tr>
                        </thead>
                        <tbody className={`${style.mainContainer}`}>
                            {
                                categories?.pageables?.map((item, index) => {
                                    return (
                                        <tr key={index} className={`${style.block}`}>
                                            <td className={`${style.item} w-[45%]`}>
                                                <div className={`${style.categoryitem}`}>
                                                    <img alt="img" className={`${style.imageitem}`} src={ImageCombiner(ImagePaths.Category, item.image)} onError={(tg: any) => { tg.target.src = ErrorImage}} />
                                                    {item.title}
                                                </div>
                                            </td>
                                            <td className={`${style.item} w-[45%]`}>{moment(item.create).format("dddd DD.MM.YYYY HH:mm")}</td>
                                            <td className={`${style.item} w-[10%]`}><button className={`${style.removebtn}`} onClick={() => {onRemoveCategory(item)}}>{t("Remove")}</button></td>                            
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            }
            <div className={`${style.paginatorContainer } ${categories?.total === 1 ? style.hide : style.visible}`}>
                <Paginator total={categories?.total ? categories?.total : 0} onPaginate={onPaginate} inititalPage={initPage} />
            </div>
        </div>
    )
}