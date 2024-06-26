import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorImage, ImageCombiner, ImagePaths } from "../../../../../Configurations/api/resources/api.resourceimage";
import { ReplaceArticle } from "../../../../../Configurations/globals";
import { useAppDispatch, useAppSelector } from "../../../../../Redux/hooks/hooks";
import { GetAllCategory } from "../../../../../Redux/reducers/categoryReducer/action";
import { AddImageProduct, EditImageProduct, EditProduct, GetProduct } from "../../../../../Redux/reducers/productReducer/action";
import { productSlice } from "../../../../../Redux/reducers/productReducer/productSlice";
import { EditProductScheme, IAddNewImageProductRequest, IEditImageProductRequest, IEditProductForm, IEditProductRequest } from "../../../../../Redux/reducers/productReducer/types";
import { DefButton } from "../../../../Common/Buttons/DefButton";
import { FormikDropdown } from "../../../../Common/Dropdowns/FormikDropdown";
import { Field } from "../../../../Common/Inputs/Field";
import style from "./editproduct.module.scss";

export const EditProductView: React.FC = () => {
    const {article} = useParams();
    const { t } = useTranslation();
    const nav = useNavigate();
    const dispatch = useAppDispatch();

    const [selectedImage, setSelectedImage] = useState("");

    const { selectedProduct } = useAppSelector(state => state.productReducer);
    const {categories} = useAppSelector(state => state.categoryReducer);

    async function fetchCategory(page: number, take: number) {
        await dispatch(GetAllCategory(page, take));
    }

    useEffect(() => {
        fetchCategory(1, 100);
    }, []);

    const values: IEditProductForm = {
        newTitle: selectedProduct ? selectedProduct.title : "",
        newUaTitle: selectedProduct ? selectedProduct.uaTitle : "",
        newDescription: selectedProduct ? selectedProduct.description : "",
        newUaDescription: selectedProduct ? selectedProduct.uaDescription : "",
        newRating: selectedProduct ? selectedProduct.rating : 0,
        newArticle: selectedProduct ? selectedProduct.article : "",
        newSize: selectedProduct ? selectedProduct.size : "",
        newBoxSize: selectedProduct ? selectedProduct.boxSize : "",
        categoryTitle: "",
    }

    async function fetchSelectedProduct() {
        if (article) {
            await dispatch(GetProduct(ReplaceArticle(article, false)));
        }
    }

    useEffect(() => {
        fetchSelectedProduct();
    }, []);

    const onSubmitForm = async (values: IEditProductForm) => {
        if (article) {      
            try {
                var request: IEditProductRequest = {
                    article: ReplaceArticle(article, false),
                    newTitle: values.newTitle ? values.newTitle : selectedProduct ? selectedProduct.title : "",
                    newUaTitle: values.newUaTitle ? values.newUaTitle : selectedProduct ? selectedProduct.uaTitle : "",
                    newDescription: values.newDescription ? values.newDescription : selectedProduct ? selectedProduct.description : "",
                    newUaDescription: values.newUaDescription ? values.newUaDescription : selectedProduct ? selectedProduct.uaDescription : "",
                    newRating: values.newRating ? values.newRating : selectedProduct ? selectedProduct.rating : 1,
                    newArticle: values.newArticle ? values.newArticle : selectedProduct ? selectedProduct.article : "",
                    newSize: values.newSize ? values.newSize : selectedProduct ? selectedProduct.size : "",
                    newBoxSize: values.newBoxSize ? values.newBoxSize : selectedProduct ? selectedProduct.boxSize : "",
                    categoryTitle: values.categoryTitle
                };
                await dispatch(EditProduct(request));
                nav('..');
    
            } catch (error) {
                dispatch(productSlice.actions.initError("Create new product was failed, try again"));
            }
        }
    };

    const onLoadingImage = async (e: any) => {

        if (e && selectedProduct && selectedImage) {
            var selectedFile = e.target.files[0];
            const request : IEditImageProductRequest = {
                article: selectedProduct.article,
                imageKey: selectedImage,
                newImage: selectedFile
            }
            await dispatch(EditImageProduct(request));
            nav("/product/" + ReplaceArticle(selectedProduct.article, true));
        }
    }

    async function AddImage(e: any) {
        if (e && selectedProduct) {
            var selectedFile = e.target.files[0];
            const request : IAddNewImageProductRequest = {
                article: selectedProduct.article,
                newImage: selectedFile
            }
            await dispatch(AddImageProduct(request));
            nav("/product/" + ReplaceArticle(selectedProduct.article, true));
        }
    }

    return (
        <section className={`${style.container}`}>
            <aside className={`${style.blockSide}`}>
                <div className={`${style.titleBlock}`}>
                    <h1 className={`${style.title}`}>{t("Edit Product")}</h1>
                </div>
                <div className="grid grid-cols-6 mm:grid-cols-3 flex-wrap gap-[15px]">
                {
                        selectedProduct && selectedProduct.images.map((item) => {
                            return (
                                <div className="w-[80px] h-[80px] bg-white rounded-sm overflow-hidden" key={item}>
                                    <input type="file" id="file" accept="image/*" onChange={async (event: any) => { await onLoadingImage(event) }} className="hidden" />
                                    <label htmlFor="file" onClick={() => {setSelectedImage(item)}}>  
                                        <img alt="img" src={ImageCombiner(ImagePaths.Product, item)} 
                                        className={`w-full h-full object-contain aspect-square bg-cover border-2 hover:border-cherry-200 cursor-pointer`}
                                        onError={(tg: any) => { tg.target.src = ErrorImage}} onClick={() => {}}/>
                                    </label>
                                </div>
                            )
                        })        
                    }
                    {[...Array(6 - (selectedProduct ? selectedProduct.images.length : 0))].map((x, i) =>
                        <div key={i}>
                            <input type="file" id="fileadd" accept="image/*" onChange={async (event: any) => { await AddImage(event) }} className="hidden" />
                            <label htmlFor="fileadd" className="w-[80px] h-[80px] bg-white rounded-sm overflow-hidden flex items-center justify-center font-bold text-2xl border-2 hover:border-cherry-200 cursor-pointer">  
                                <FontAwesomeIcon icon={faImage} />
                            </label>
                        </div>
                    )}
                </div>
                <Formik initialValues={values} validationSchema={EditProductScheme} onSubmit={onSubmitForm}>
                    <Form className={`${style.formContainer}`}>
                        <div className={`${style.fieldBlock}`}>
                            <div className="grid grid-cols-2 w-full gap-[15px] mm:grid-cols-1">
                                <Field placeholder={t("Title")} value={selectedProduct?.title} name="newTitle" type="text" />
                                <Field placeholder={t("Title in UA")} value={selectedProduct?.uaTitle} name="newUaTitle" type="text" />
                            </div>
                            <div className="grid grid-cols-2 w-full gap-[15px] mm:grid-cols-1">                       
                                <Field placeholder={t("Description")} value={selectedProduct?.description} name="newDescription" type="text" />
                                <Field placeholder={t("Description in UA")} value={selectedProduct?.uaDescription} name="newUaDescription" type="text" />
                            </div>
                            <div className="grid grid-cols-2 w-full gap-[15px] mm:grid-cols-1">                                    
                                <Field placeholder={t("Article")} value={selectedProduct?.article} name="newArticle" type="text" />
                                <Field placeholder={t("Rating")} value={selectedProduct?.rating.toString()} name="newRating" type="number" />
                            </div>
                            <div className="grid grid-cols-2 w-full gap-[15px] mm:grid-cols-1">                                    
                                <Field placeholder={t("Size")} value={selectedProduct?.size} name="newSize" type="text" />                   
                                <Field placeholder={t("Box Size")} value={selectedProduct?.boxSize} name="newBoxSize" type="text" />                   
                            </div>
                            {
                                categories && categories.pageables &&
                                <FormikDropdown name={"categoryTitle"} title={t("Category")} options={categories?.pageables?.map(item => { return {key: item.title, value: item.title}})} />
                            }
                        </div>
                        <div className={`${style.buttonContainer}`}>
                            <DefButton title={t("Edit")} />
                        </div>
                    </Form>
                </Formik>
            </aside>
        </section>
    )
}