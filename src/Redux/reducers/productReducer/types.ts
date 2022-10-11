import { IPaginateResponse } from "../../../Configurations/globals";
import * as Yup from "yup";

export interface IProduct {
    title: string,
    images: Array<string>,
    description: string,
    rating: number,
    article: string,
    create: Date,
}

export interface ICreateProductRequest {
    title: string,
    images: Array<File>,
    description: string,
    rating: number,
    article: string,
    categoryTitle: string,
}

export interface ICreateProductForm {
    title: string,
    description: string,
    rating: number,
    article: string,
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
    title: Yup.string().required("Email is required"),
    description: Yup.string().required("Desciption is required"),
    rating: Yup.number().required("Rating is required"),
    article: Yup.string().required("Article is required"),
    categoryTitle: Yup.string().required("Category title is required"),
});
