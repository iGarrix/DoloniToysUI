
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ErrorImage } from "../../../../../Configurations/api/resources/api.resourceimage";
import { useAppDispatch, useAppSelector } from "../../../../../Redux/hooks/hooks";
import { GetAllCategory } from "../../../../../Redux/reducers/categoryReducer/action";
import { categorySlice } from "../../../../../Redux/reducers/categoryReducer/categorySlice";
import { CreateProduct } from "../../../../../Redux/reducers/productReducer/action";
import { CreateProductScheme, ICreateProductForm, ICreateProductRequest } from "../../../../../Redux/reducers/productReducer/types";
import { DefButton } from "../../../../Common/Buttons/DefButton";
import { FormikDropdown } from "../../../../Common/Dropdowns/FormikDropdown";
import { Field } from "../../../../Common/Inputs/Field";
import style from "./style.cprod.module.scss";

export const CreateProductView : React.FC = () => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const nav = useNavigate();
    const {error} = useAppSelector(state => state.categoryReducer);
    const {categories} = useAppSelector(state => state.categoryReducer);

    const [file, setFile] = useState<any>(ErrorImage);
    const [targetFile, setTargetFile] = useState<File[]>([]);

    const values : ICreateProductForm = {
        title: "",
        uatitle: "",
        description: "",
        uadescription: "",
        rating: 0,
        article: "",
        size: "",
        categoryTitle: "",
        boxSize: ""
    }

    async function fetchCategory(page: number, take: number) {
        await dispatch(GetAllCategory(page, take));
    }

    useEffect(() => {
        fetchCategory(1, 100);
    }, []);

    const onSubmitForm = async (values: ICreateProductForm) => {
        if (targetFile) {       
            try {
                var request: ICreateProductRequest = {
                    title: values.title,
                    uatitle: values.uatitle,
                    uadescription: values.uadescription,
                    description: values.description,
                    images: targetFile,
                    rating: values.rating,
                    article: values.article,
                    categoryTitle: values.categoryTitle,
                    size: values.size,
                    boxSize: values.boxSize
                };
                await dispatch(CreateProduct(request));
                nav('..');
    
            } catch (error) {
                dispatch(categorySlice.actions.initError("Create new product was failed, try again"));
            }   
            
        }
        else {
            dispatch(categorySlice.actions.initError("Images dont chosed"));
        }
    };

    const onLoadingImage = (e: any) => {
        if (e) {
            var selectedFile = e.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onload = e => e?.target ? setFile(e.target?.result) : "";
            setTargetFile(e.target.files);
            dispatch(categorySlice.actions.initError(""));
        }
    }

    return (
        <section className={`${style.container}`}>
        <aside className={`${style.blockSide}`}>
            <div className={`${style.titleBlock}`}>
                <h1 className={`${style.title}`}>{t("Create new product")}</h1>
                {
                    error ?
                    <p className={`${style.error}`}>{error}</p> :
                    <p className={`${style.desc}`}>{t("Uploaded")} {targetFile? targetFile.length : 0} {t("images")}</p>
                }
            </div>
            <Formik initialValues={values} validationSchema={CreateProductScheme} onSubmit={onSubmitForm}>
                <Form className={`${style.formContainer}`}> 
                    <div className={`${style.imageBlock}`}>
                        <div className={`${style.imageContainer}`}>
                            <div className={`${style.imageEffect}`}>
                                <input type="file" id="file" accept="image/*" multiple onChange={(event: any) => { onLoadingImage(event) }} className="hidden" />
                                <label htmlFor="file"><FontAwesomeIcon className={`${style.icon}`} icon={faImage} /> </label>
                            </div>
                            <img alt="avatar" src={file} className={`${style.image}`} onError={(tg: any) => { tg.target.src = ErrorImage }} />
                        </div>
                    </div>          
                    <div className={`${style.fieldBlock}`}>
                        <div className="flex gap-[15px]">
                            <Field placeholder={t("Title")} name="title" type="text" />
                            <Field placeholder={t("Title in UA")} name="uatitle" type="text" />
                        </div>
                        <div className="flex gap-[15px]">                       
                            <Field placeholder={t("Description")} name="description" type="text" />
                            <Field placeholder={t("Description in UA")} name="uadescription" type="text" />
                        </div>
                        <div className="flex gap-[15px]">                                    
                            <Field placeholder={t("Article")} name="article" type="text" />
                            <Field placeholder={t("Rating")} name="rating" type="number" />
                        </div>
                        <div className="flex gap-[15px]">                                    
                            <Field placeholder={t("Size")} name="size" type="text" />
                            <Field placeholder={t("Box Size")} name="boxSize" type="text" />
                        </div>
                        {
                            categories && categories.pageables &&
                            <FormikDropdown name={"categoryTitle"} title={t("Category")} options={categories?.pageables?.map(item => { return {key: item.title, value: item.title}})} />
                        }
                    </div>
                    <div className={`${style.buttonContainer}`}>
                        <DefButton title={t("Create")} />
                    </div>
                </Form>
            </Formik>
        </aside>
    </section>
    )
}