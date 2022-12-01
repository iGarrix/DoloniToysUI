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
    boxSize: string,
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
    boxSize: string,
    categoryTitle: string,
}

export interface IEditProductRequest {
    article: string,
    categoryTitle: string,
    newTitle: string,
    newUaTitle: string,
    newDescription: string,
    newUaDescription: string,
    newRating: number,
    newArticle: string,
    newSize: string,
    newBoxSize: string,
}

export interface IEditProductForm {
    newTitle: string,
    newUaTitle: string,
    newDescription: string,
    newUaDescription: string,
    newRating: number,
    newArticle: string,
    newSize: string,
    newBoxSize: string,
    categoryTitle: string,
}

export interface IEditImageProductRequest {
    article: string,
    imageKey: string,
    newImage: File,
}

export interface IAddNewImageProductRequest {
    article: string,
    newImage: File,
}

export interface ICreateProductForm {
    title: string,
    uatitle: string,
    description: string,
    uadescription: string,
    rating: number,
    article: string,
    size: string,
    boxSize: string,
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
    boxSize: Yup.string().required("Box size is required"),
    categoryTitle: Yup.string().required("Category title is required"),
});

export const EditProductScheme = Yup.object({
    newTitle: Yup.string().min(1, "Title is required"),
    newUaTitle: Yup.string().min(1, "Title in UA is required"),
    newDescription: Yup.string().min(1, "Desciption is required"),
    newUaDescription: Yup.string().min(1, "Desciption in UA is required"),
    newRating: Yup.number(),
    newArticle: Yup.string().min(1, "Article is required"),
    newSize: Yup.string().min(1, "Size is required"),
    newBoxSize: Yup.string().min(1, "Box size is required"),
    categoryTitle: Yup.string(),
});
