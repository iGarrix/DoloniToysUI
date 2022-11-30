
import { Form, Formik } from "formik";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import { ImageCombiner, ImagePaths, ErrorImage } from "../../../../../Configurations/api/resources/api.resourceimage";
import { useAppDispatch, useAppSelector } from "../../../../../Redux/hooks/hooks";
import { EditCategory, GetCategory } from "../../../../../Redux/reducers/categoryReducer/action";
import { categorySlice } from "../../../../../Redux/reducers/categoryReducer/categorySlice";
import { EditCategoryScheme, IEditCategoryRequest } from "../../../../../Redux/reducers/categoryReducer/types";
import { DefButton } from "../../../../Common/Buttons/DefButton";
import { Field } from "../../../../Common/Inputs/Field";

import style from "./editcategory.module.scss";

export const EditCategoryView : React.FC = () => {
    const {title} = useParams();
    const { t } = useTranslation();
    const nav = useNavigate();
    const dispatch = useAppDispatch();

    const { selectedCategory } = useAppSelector(state => state.categoryReducer);

    const values: IEditCategoryRequest = {
        title: title ? title : "",
        newTitle: "",
        newUaTitle: "",
        newRating: 0
    }

    async function fetchSelectedCategory() {
        if (title) {
            await dispatch(GetCategory(title));
        }
    }

    useEffect(() => {
        fetchSelectedCategory();
    }, []);

    const onSubmitForm = async (values: IEditCategoryRequest) => {
        if (title) {      
            try {
                var request: IEditCategoryRequest = {
                    title: title,
                    newTitle: values.newTitle ? values.newTitle : selectedCategory? selectedCategory.title : "",
                    newUaTitle: values.newUaTitle ? values.newUaTitle : selectedCategory? selectedCategory.uaTitle : "",
                    newRating: values.newRating ? values.newRating : selectedCategory? selectedCategory.rating : 1,
                };
                await dispatch(EditCategory(request));
                nav('../categories');
    
            } catch (error) {
                dispatch(categorySlice.actions.initError("Edit category was failed, try again"));
            }
        }
    };

    const onLoadingImage = async (e: any) => {

        if (e && selectedCategory && title) {
            var selectedFile = e.target.files[0];
            console.log(selectedFile);
            var request: IEditCategoryRequest = {
                title: title,
                newTitle: selectedCategory? selectedCategory.title : "",
                newUaTitle: selectedCategory? selectedCategory.uaTitle : "",
                newRating: selectedCategory? selectedCategory.rating : 1,
                newImage: selectedFile,
            };
            await dispatch(EditCategory(request));
            nav('../categories');
        }
    }

    return (
        <section className={`${style.container}`}>
            <aside className={`${style.blockSide}`}>
                <div className={`${style.titleBlock}`}>
                    <h1 className={`${style.title}`}>{t("Edit Category")}</h1>
                </div>
                <div className="grid grid-cols-6 mm:grid-cols-3 flex-wrap gap-[15px]">
                    {
                        selectedCategory && 
                        <div className="w-[80px] h-[80px] bg-white rounded-sm overflow-hidden" key={selectedCategory.image}>
                            <input type="file" id="file" accept="image/*" onChange={async (event: any) => { await onLoadingImage(event) }} className="hidden" />
                            <label htmlFor="file">  
                                <img alt="img" src={ImageCombiner(ImagePaths.Category, selectedCategory.image)} 
                                className={`w-full h-full object-contain aspect-square bg-cover border-2 hover:border-cherry-200 cursor-pointer`}
                                onError={(tg: any) => { tg.target.src = ErrorImage}} onClick={() => {}}/>
                            </label>
                        </div>
                    }
                </div>
                <Formik initialValues={values} validationSchema={EditCategoryScheme} onSubmit={onSubmitForm}>
                    <Form className={`${style.formContainer}`}>
                        <div className={`${style.fieldBlock}`}>
                            <div className="grid grid-cols-2 w-full gap-[15px] mm:grid-cols-1">
                                <Field placeholder={t("Title")} value={selectedCategory?.title} name="newTitle" type="text" />
                                <Field placeholder={t("Title in UA")} value={selectedCategory?.uaTitle} name="newUaTitle" type="text" />
                            </div>
                            <Field placeholder={t("Rating")} value={selectedCategory?.rating.toString()} name="newRating" type="number" />
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