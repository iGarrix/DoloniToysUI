import { faAngleDown, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useTransition } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { IGetProductFilter } from "../../../Configurations/api/requestmodels/models";
import { ExpressionTypes } from "../../../Configurations/api/resources/api.expressiontypes";
import { ImageCombiner, ImagePaths } from "../../../Configurations/api/resources/api.resourceimage";
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks/hooks";
import { GetAllCategory } from "../../../Redux/reducers/categoryReducer/action";
import { GetAllFilteredProduct, GetAllProduct } from "../../../Redux/reducers/productReducer/action";
import { Paginator } from "../../Common/Paginator";
import { ProductCard } from "../../CustomComponent/Cards/ProductCard";

import style from "./style.catalog.module.scss";

export const CatalogView: React.FC = () => {

    const { category } = useParams();
    const nav = useNavigate();
    const [isOpen, setOpen] = useState(false);
    const { categories } = useAppSelector(state => state.categoryReducer);
    const { products, error, isLoading, successMessage } = useAppSelector(state => state.productReducer);
    const dispatch = useAppDispatch();
    const history = useLocation();
    const [isPending, startTransition] = useTransition();

    async function fetchFilterProducts(request: IGetProductFilter) {
        await dispatch(GetAllFilteredProduct(request));
    }

    async function fetchCategory(page: number, take: number) {
        await dispatch(GetAllCategory(page, take));
    }

    async function fetchProduct(page: number, take: number) {
        await dispatch(GetAllProduct(page, take))
    }

    useEffect(() => {
        fetchCategory(1, 1000);
        if (category) {
            const request: IGetProductFilter = {
                categoryTitle: category,
                filterParam: "*",
                page: 1,
                take: 24
            }
            fetchFilterProducts(request);
        }
        else {
            fetchProduct(1, 24);
        }
    }, [category]);

    const onPaginate = async (event: number) => {
        startTransition(() => {
            fetchProduct(event, 24);
            window.document.documentElement.scrollTo(0, 0);
        });
    }

    async function Filter(filterParams: string) {
        const request: IGetProductFilter = {
            categoryTitle: category ? category : "*",
            filterParam: filterParams,
            page: 1,
            take: 24
        }
        fetchFilterProducts(request);
    }

    return (
        <section className={`${style.catalogContainer}`}>
            <aside className={`${style.filterGridContainer}`}>
                <div className={`${style.filterGridWrapper}`}>
                    <div className={`${style.headerFilter}`}>
                        <h1 className={`${style.title}`}>Фільтри</h1>
                        <FontAwesomeIcon icon={isOpen ? faClose : faAngleDown} className={`${style.turnButton}`} onClick={() => {setOpen(!isOpen)}} />
                    </div>
                    <div className={`${style.mainFilter} ${isOpen ? style.opened : style.closed}`}>
                        <p  className={`${style.item} ${history.pathname === "/catalog" ? style.selected : null}`} onClick={() => { nav("") }}>
                            Всі
                        </p>
                        {categories?.pageables?.map(item => {
                            return (
                                <p key={item.title} className={`${style.item} ${category === item.title ? style.selected : null}`} onClick={() => { nav(item.title) }}>
                                    {item.title}
                                </p>
                            )
                        })}
                        <hr />
                        <p className={`${style.item}`} onClick={() => {Filter(ExpressionTypes.FilterNameOrder)}}>
                            Фільтрувати по назві (по зростанню)
                        </p>
                        <p className={`${style.item}`} onClick={() => {Filter(ExpressionTypes.FilterNameOrderByDescending)}}>
                            Фільтрувати по назві (по спаданню)
                        </p>
                        <p className={`${style.item}`} onClick={() => {Filter(ExpressionTypes.FilterRatingOrder)}}>
                            Фільтрувати по рейтингу (по зростанню)
                        </p>
                        <p className={`${style.item}`} onClick={() => {Filter(ExpressionTypes.FilterRatingOrderByDescending)}}>
                            Фільтрувати по рейтингу (по спаданню)
                        </p>
                    </div>
                </div>
            </aside>
            {
                products?.total ?
                    <aside className={`${style.productContainer}`}>
                        {
                            products?.pageables?.map(item => {
                                return (
                                    <ProductCard key={item.article} src={ImageCombiner(ImagePaths.Product, item.images[0])} title={item.title} onClick={() => { nav("/product/" + item.article) }} />
                                )
                            })
                        }
                        <div className={`${style.paginatorContainer}`}>
                            <Paginator total={products?.total ? products?.total : 0} onPaginate={onPaginate} />
                        </div>
                    </aside> :
                    <aside className={`${style.productErrorContainer}`}>
                        <div className={`${style.errorContainer}`}>
                            <h1 className={`${style.errorMessage}`}>{error}</h1>
                        </div>
                    </aside>
            }
        </section>
    )
}

{/* <aside className="bg-light w-full">
                <h1 className="font-[700] text-2xl">Товари на будь який вибір!</h1>
            </aside> */}