import { IPaginateResponse } from "../../../Configurations/globals";
import * as Yup from "yup";

export interface IProduct {
    title: string,
    uaTitle: string,
    images: Array<string>,
    description: string,
    uaDescription: string,
    rating: number,
    article: string,
    size: string,
    create: Date,
}

export interface ICreateProductRequest {
    title: string,
    uatitle: string,
    images: Array<File>,
    description: string,
    uadescription: string,
    rating: number,
    article: string,
    size: string,
    categoryTitle: string,
}

export interface ICreateProductForm {
    title: string,
    uatitle: string,
    description: string,
    uadescription: string,
    rating: number,
    article: string,
    size: string,
    categoryTitle: string,
}

export interface IProductState {
    products: IPaginateResponse<IProduct> | null,
    selectedProduct: IProduct | null,
    isLoading: boolean;
    error: string;
    successMessage: string,
}

export interface IRemoveProductRequest {
    article: string,
}

export const CreateProductScheme = Yup.object({
    title: Yup.string().required("Title is required"),
    uatitle: Yup.string().required("Title in UA is required"),
    description: Yup.string().required("Desciption is required"),
    uadescription: Yup.string().required("Desciption in UA is required"),
    rating: Yup.number().required("Rating is required"),
    article: Yup.string().required("Article is required"),
    size: Yup.string().required("Size is required"),
    categoryTitle: Yup.string().required("Category title is required"),
});
