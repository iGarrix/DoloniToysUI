import { IPaginateResponse } from "../../../Configurations/globals";
import * as Yup from "yup";

export interface ICategory {
    title: string,
    image: string,
    create: Date,
}

export interface ICreateCategoryForm {
    title: string,
}

export interface ICreateCategoryRequest {
    title: string,
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
});