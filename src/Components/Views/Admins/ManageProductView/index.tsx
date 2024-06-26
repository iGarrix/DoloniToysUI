import moment from "moment";
import { useEffect, useState, useTransition } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ErrorImage, ImageCombiner, ImagePaths } from "../../../../Configurations/api/resources/api.resourceimage";
import { ReplaceArticle } from "../../../../Configurations/globals";
import { useAppDispatch, useAppSelector } from "../../../../Redux/hooks/hooks";
import { GetAllProduct, RemoveProduct } from "../../../../Redux/reducers/productReducer/action";
import { IProduct } from "../../../../Redux/reducers/productReducer/types";
import { Paginator } from "../../../Common/Paginator";

import style from "./style.manageproduct.module.scss";

export const ManageProductView : React.FC = () => {
    const {t} = useTranslation();
    const { products, isLoading, error } = useAppSelector(state => state.productReducer);
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

    async function fetchProduct(page: number, take: number) {
        await dispatch(GetAllProduct(page, take));
    }

    useEffect(() => {
        if (searchParams) {
            const currentPage = searchParams.get("page");
            if (currentPage) {
                fetchProduct(Number.parseInt(currentPage), 10);
            }
        }
    }, [])

    const onPaginate = async (event: number) => {
        startTransition(() => {
            setSearchParams({ page: `${event}` });
            fetchProduct(event, 10);
        }); 
    }

    async function onRemoveProduct(item: IProduct) {
        await dispatch(RemoveProduct(item));
        const currentPage = searchParams.get("page");
        fetchProduct(currentPage ? Number.parseInt(currentPage) : 1, 10);
    }

    return (
        <div className={`${style.container}`}>
            <div className={`${style.infoContainer}`}>
                <h1 className={`${style.message}`}>{t("There are")} {products?.total ? products.total : "none"} {t("pages and")} {products ? products.totalObj : "none"} {t("products,")} <span className={`${style.link}`} onClick={() => {nav("create-product")}}>{t("Create")}</span></h1>
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
                                <th className={`${style.title}`}>{t("Edit")}</th>
                            </tr>
                        </thead>
                        <tbody className={`${style.mainContainer}`}>
                            {
                                products?.pageables?.map((item, index) => {
                                    return (
                                        <tr key={index} className={`${style.block}`}>
                                            <td className={`${style.item} w-[45%] cursor-pointer`} onClick={() => {nav("/product/" + ReplaceArticle(item.article, true))}}>
                                                <div className={`${style.categoryitem}`}>
                                                    <img alt="img" className={`${style.imageitem}`} src={ImageCombiner(ImagePaths.Product, item.images[0])} onError={(tg: any) => { tg.target.src = ErrorImage}} />
                                                    {item.title}
                                                </div>
                                            </td>
                                            <td className={`${style.item} w-[45%] cursor-pointer`} onClick={() => {nav("/product/" + ReplaceArticle(item.article, true))}}>{moment(item.create).format("dddd DD.MM.YYYY HH:mm")}</td>
                                            <td className={`${style.item} w-[10%]`}><button className={`${style.removebtn}`} onClick={() => {onRemoveProduct(item)}}>{t("Remove")}</button></td>                            
                                            <td className={`${style.item} w-[10%]`}><button className={`${style.editbtn}`} onClick={() => {nav("edit-product/" + ReplaceArticle(item.article, true))}}>{t("Edit")}</button></td>                            
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            }
            <div className={`${style.paginatorContainer } ${products?.total === 1 ? style.hide : style.visible}`}>
                <Paginator total={products?.total ? products?.total : 0} onPaginate={onPaginate} inititalPage={initPage} />
            </div>
        </div>
    )
}