import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorImage } from "../../../../../Configurations/api/resources/api.resourceimage";
import { useAppDispatch, useAppSelector } from "../../../../../Redux/hooks/hooks";
import { CreateCategory } from "../../../../../Redux/reducers/categoryReducer/action";
import { categorySlice } from "../../../../../Redux/reducers/categoryReducer/categorySlice";
import { CreateCategoryScheme, ICreateCategoryForm, ICreateCategoryRequest } from "../../../../../Redux/reducers/categoryReducer/types"
import { DefButton } from "../../../../Common/Buttons/DefButton";
import { Field } from "../../../../Common/Inputs/Field";

import style from "./style.ccat.module.scss";

export const CreateCategoryView : React.FC = () => {

    const dispatch = useAppDispatch();
    const nav = useNavigate();
    const {error} = useAppSelector(state => state.categoryReducer);

    const [file, setFile] = useState<any>(ErrorImage);
    const [targetFile, setTargetFile] = useState<any>(null);

    const values : ICreateCategoryForm = {
        title: "",
    }

    const onSubmitForm = async (values: ICreateCategoryForm) => {
        if (targetFile) {       
            try {
                var request: ICreateCategoryRequest = {
                    title: values.title,
                    image: targetFile
                };
                await dispatch(CreateCategory(request));
                nav('../categories');
    
            } catch (error) {
                dispatch(categorySlice.actions.initError("Create new category was failed, try again"));
            }   
            
        }
        else {
            dispatch(categorySlice.actions.initError("Image dont chosed"));
        }
    };

    const onLoadingImage = (e: any) => {
        if (e) {
            var selectedFile = e.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onload = e => e?.target ? setFile(e.target?.result) : "";
            setTargetFile(selectedFile);
            dispatch(categorySlice.actions.initError(""));
        }
    }

    return (
        <section className={`${style.container}`}>
        <aside className={`${style.blockSide}`}>
            <div className={`${style.titleBlock}`}>
                <h1 className={`${style.title}`}>Create new category</h1>
                {
                    error ?
                    <p className={`${style.error}`}>{error}</p> :
                    <p className={`${style.desc}`}>You can create a new category</p>
                }
            </div>
            <Formik initialValues={values} validationSchema={CreateCategoryScheme} onSubmit={onSubmitForm}>
                <Form className={`${style.formContainer}`}> 
                    <div className={`${style.imageBlock}`}>
                        <div className={`${style.imageContainer}`}>
                            <div className={`${style.imageEffect}`}>
                                <input type="file" id="file" accept="image/*" onChange={(event: any) => { onLoadingImage(event) }} className="hidden" />
                                <label htmlFor="file"><FontAwesomeIcon className={`${style.icon}`} icon={faImage} /> </label>
                            </div>
                            <img alt="avatar" src={file} className={`${style.image}`} onError={(tg: any) => { tg.target.src = ErrorImage }} />
                        </div>
                    </div>          
                    <div className={`${style.fieldBlock}`}>
                        <Field placeholder="Title" name="title" type="text" />
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