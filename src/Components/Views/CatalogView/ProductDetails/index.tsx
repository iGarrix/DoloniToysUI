import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom"
import { ErrorImage, ImageCombiner, ImagePaths } from "../../../../Configurations/api/resources/api.resourceimage";
import { LanguageType, ReplaceArticle } from "../../../../Configurations/globals";
import { useAppDispatch, useAppSelector } from "../../../../Redux/hooks/hooks";
import { GetProduct } from "../../../../Redux/reducers/productReducer/action";
import { DefButton } from "../../../Common/Buttons/DefButton";

import style from "./style.pdetail.module.scss";

const extend = require('../../../../Assets/Icons/detailextend.png');
const productSize = require('../../../../Assets/Icons/productSize.png');
const boxSize = require('../../../../Assets/Icons/boxSize.png');

export const ProductDetails : React.FC = () => {
    const {t} = useTranslation();
    const {article} = useParams();
    const dispatch = useAppDispatch();
    const nav = useNavigate();
    const [selectImage, setSelectImage] = useState(0);

    const { selectedProduct } = useAppSelector(state => state.productReducer);
    const { auth } = useAppSelector(state => state.accountReducer);

    async function fetchProduct() {
        if (article) {
            await dispatch(GetProduct(ReplaceArticle(article, false)));
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
                        selectedProduct && selectedProduct.images.length > 1 && selectedProduct.images.map((item, index) => {
                            return (
                                <img alt="img" key={index} src={ImageCombiner(ImagePaths.Product, selectedProduct ? selectedProduct.images[index] : "")} 
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
                    <h1 className={`${style.title}`}>{localStorage.getItem("lang") == LanguageType.UA ? selectedProduct?.uaTitle : selectedProduct?.title}</h1>
                    <h2 className={`${style.desc}`}>{localStorage.getItem("lang") == LanguageType.UA ? selectedProduct?.uaDescription : selectedProduct?.description}</h2>
                    <p className={`${style.article}`}>{t("Article №:")} {selectedProduct?.article}</p>
                        <div className="flex gap-[3vw]">
                            {
                                selectedProduct && selectedProduct.size !== "" &&
                                <div className="flex flex-col gap-[.7vw] items-center justify-center">
                                    <img alt="productSize" src={productSize} className="w-[54px] h-[54px] object-contain aspect-square"/>
                                    <p className={`${style.article}`}>{selectedProduct.size}</p>
                                </div> 
                            }
                            {
                                selectedProduct && selectedProduct.boxSize !== "" &&
                                <div className="flex flex-col gap-[.7vw] items-center">
                                    <img alt="boxSize" src={boxSize} className="w-[54px] h-[54px] object-contain aspect-square"/>
                                    <p className={`${style.article}`}>{selectedProduct.boxSize}</p>
                                </div> 
                            }                  
                        </div>
                    {
                        auth &&
                        <Fragment>
                            <hr />
                            <div className="flex gap-[10px]">
                                <DefButton title={t(`Edit`)} onClick={() => {nav("/for-admins/edit-product/" + ReplaceArticle(selectedProduct? selectedProduct.article : "", true))}} />
                            </div>
                        </Fragment>
                    }
                </div>
            </aside>
        </section>
    )
}