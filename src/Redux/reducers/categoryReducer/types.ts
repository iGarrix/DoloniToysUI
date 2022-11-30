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

export interface IEditCategoryRequest {
    title: string,
    newTitle: string,
    newUaTitle: string,
    newRating: number,
    newImage?: File | null,
}

export interface ICategoryState {
    categories: IPaginateResponse<ICategory> | null,
    selectedCategory: ICategory | null,
    isLoading: boolean;
    error: string;
    successMessage: string,
}

export const CreateCategoryScheme = Yup.object({
    title: Yup.string().required("Title is required"),
    uatitle: Yup.string().required("Title in UA is required"),
    rating: Yup.number().required("Rating is required"),
});
export const EditCategoryScheme = Yup.object({
    newTitle: Yup.string().min(1, "New title is required"),
    newUaTitle: Yup.string().min(1, "New title in UA is required"),
    newRating: Yup.number().min(0, "Rating is required"),
});