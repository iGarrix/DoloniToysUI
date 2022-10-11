import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ErrorImage, ImageCombiner, ImagePaths } from "../../../../Configurations/api/resources/api.resourceimage";
import { useAppDispatch, useAppSelector } from "../../../../Redux/hooks/hooks";
import { GetProduct } from "../../../../Redux/reducers/productReducer/action";

import style from "./style.pdetail.module.scss";

const extend = require('../../../../Assets/Icons/detailextend.png');

export const ProductDetails : React.FC = () => {

    const {article} = useParams();
    const dispatch = useAppDispatch();
    const [selectImage, setSelectImage] = useState(0);

    const { selectedProduct } = useAppSelector(state => state.productReducer);

    async function fetchProduct() {
        if (article) {
            await dispatch(GetProduct(article));
        }
    }

    useEffect(() => {
      fetchProduct(); 
    }, [])
    

    return (
        <section className={`${style.container}`}>
            <aside className={`${style.side_1}`}>
                {
                    selectedProduct?.images.map((item, index) => {
                        return (
                            selectImage === index ?
                            <img alt="img" key={index} src={ImageCombiner(ImagePaths.Product, selectedProduct? selectedProduct.images[selectImage] : "")} 
                            className={`${style.image}`}
                            onError={(tg: any) => { tg.target.src = ErrorImage}}/> : null
                        )
                    })
                }
                <div className={`${style.paginatorContainer}`}>
                    {
                        selectedProduct?.images.map((item, index) => {
                            return (
                                <img alt="img" key={index} src={ImageCombiner(ImagePaths.Product, selectedProduct? selectedProduct.images[index] : "")} 
                                className={`${style.item} ${selectImage === index ? style.selected : null}`}
                                onError={(tg: any) => { tg.target.src = ErrorImage}} onClick={() => {setSelectImage(index)}}/>
                            )
                        })
                    }
                </div>
            </aside>         
            <aside className={`${style.side_2}`}>
                <div className={`${style.extendContainer}`}>
                    <img alt="extend" src={extend} className={`${style.extend}`} />
                </div>
                <div className={`${style.contentContainer}`}>
                    <h1 className={`${style.title}`}>{selectedProduct?.title}</h1>
                    <h2 className={`${style.desc}`}>{selectedProduct?.description}</h2>
                    <p className={`${style.article}`}>Article №: {selectedProduct?.article}</p>
                </div>
            </aside>
        </section>
    )
}