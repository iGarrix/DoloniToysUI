import { IPaginateResponse } from "../../../Configurations/globals";

export interface IProduct {
    title: string,
    images: Array<string>,
    description: string,
    rating: number,
    article: string,
    create: Date,
}

export interface IProductState {
    products: IPaginateResponse<IProduct> | null,
    selectedProduct: IProduct | null,
    isLoading: boolean;
    error: string;
    successMessage: string,
}