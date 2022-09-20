import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { IGetProductFilter } from "../../../Configurations/api/requestmodels/models";
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks/hooks";
import { GetAllFilteredProduct } from "../../../Redux/reducers/productReducer/action";

export const CatalogView : React.FC = () => {

    const {title} = useParams();
    const nav = useNavigate();
    const {categories} = useAppSelector(state => state.categoryReducer);
    const { products, error, isLoading, successMessage} = useAppSelector(state => state.productReducer);
    const dispatch = useAppDispatch();

    async function fetch(request: IGetProductFilter) {
        await dispatch(GetAllFilteredProduct(request))
    }

    useEffect(() => {
        if (title) {            
            const request : IGetProductFilter = {
                categoryTitle: title,
                filterParam: "*",
                page: 1,
                take: 10
            }
            fetch(request);
        }
    }, []);

    function selectProduct(article: string) {
        nav(`/product/` + article);
    }

    return (
        <section>
            {
                products &&
                products.pageables?.map(item => {
                    return (
                        <div key={item.article} onClick={() => {selectProduct(item.article)}}>
                            <span className="bg-dark">{item.title}</span>
                        </div>
                    )
                })
            }
        </section>
    )
}