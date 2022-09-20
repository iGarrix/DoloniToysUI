import { IPaginateResponse } from "../../../Configurations/globals";

export interface ICategory {
    title: string,
    image: string,
    create: Date,
}

export interface ICategoryState {
    categories: IPaginateResponse<ICategory> | null,
    isLoading: boolean;
    error: string;
    successMessage: string,
}