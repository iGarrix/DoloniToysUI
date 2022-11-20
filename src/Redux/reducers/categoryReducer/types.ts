import { IPaginateResponse } from "../../../Configurations/globals";
import * as Yup from "yup";

export interface ICategory {
    title: string,
    uaTitle: string,
    image: string,
    rating: number,
    create: Date,
}

export interface ICreateCategoryForm {
    title: string,
    uatitle: string,
    rating: number,
}

export interface ICreateCategoryRequest {
    title: string,
    uaTitle: string,
    rating: number,
    image: File,
}

export interface ICategoryState {
    categories: IPaginateResponse<ICategory> | null,
    isLoading: boolean;
    error: string;
    successMessage: string,
}

export const CreateCategoryScheme = Yup.object({
    title: Yup.string().required("Title is required"),
    uatitle: Yup.string().required("Title in UA is required"),
    rating: Yup.number().required("Rating is required"),
});