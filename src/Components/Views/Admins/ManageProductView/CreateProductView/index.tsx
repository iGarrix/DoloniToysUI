
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
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

    const dispatch = useAppDispatch();
    const nav = useNavigate();
    const {error} = useAppSelector(state => state.categoryReducer);
    const {categories} = useAppSelector(state => state.categoryReducer);

    const [file, setFile] = useState<any>(ErrorImage);
    const [targetFile, setTargetFile] = useState<File[]>([]);

    const values : ICreateProductForm = {
        title: "",
        description: "",
        rating: 0,
        article: "",
        categoryTitle: "",
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
                    images: targetFile,
                    description: values.description,
                    rating: values.rating,
                    article: values.article,
                    categoryTitle: values.categoryTitle,
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
                <h1 className={`${style.title}`}>Create new product</h1>
                {
                    error ?
                    <p className={`${style.error}`}>{error}</p> :
                    <p className={`${style.desc}`}>Uploaded {targetFile? targetFile.length : 0} images</p>
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
                        <Field placeholder="Title" name="title" type="text" />
                        <Field placeholder="Description" name="description" type="text" />
                        <Field placeholder="Article" name="article" type="text" />
                        <Field placeholder="Rating" name="rating" type="number" />
                        {
                            categories && categories.pageables &&
                            <FormikDropdown name={"categoryTitle"} title={"Category"} options={categories?.pageables?.map(item => { return {key: item.title, value: item.title}})} />
                        }
                    </div>
                    <div className={`${style.buttonContainer}`}>
                        <DefButton title="Create" />
                    </div>
                </Form>
            </Formik>
        </aside>
    </section>
    )
}