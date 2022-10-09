import { defaultErrorMessage } from "../../../Configurations/api";
import { IGetProductFilter } from "../../../Configurations/api/requestmodels/models";
import { ProductController } from "../../../Configurations/api/resources/api.controller";
import http from "../../../Configurations/axios/axios";
import { GetApiUrl, IExceptionHandleResponse, IPaginateResponse } from "../../../Configurations/globals";
import { AppDispatch } from "../../store/store";
import { productSlice } from "./productSlice";
import { IProduct } from "./types";

export const GetAllProduct = (page: number, take: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.initLoading());
        const request = await http.get<IPaginateResponse<IProduct> | IExceptionHandleResponse>(GetApiUrl(ProductController.Default, ProductController.GetAll), {params: 
            {
                page: page,
                take: take,
            }});
        const error : IExceptionHandleResponse = request.data as IExceptionHandleResponse;
        if ('StatusCode' in error) {
           throw error;
        }
        const response : IPaginateResponse<IProduct> = request.data as IPaginateResponse<IProduct>;
        if (response) {         
            dispatch(productSlice.actions.initProducts(response));
        }
    } catch (e) {
        const error = e as IExceptionHandleResponse;
        if (error) {
            dispatch(productSlice.actions.initError(error.Message));
        }
        else {
            dispatch(productSlice.actions.initError(defaultErrorMessage));
        }
    }
}

export const GetAllFilteredProduct = (data: IGetProductFilter) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.initLoading());
        const request = await http.get<IPaginateResponse<IProduct> | IExceptionHandleResponse>(GetApiUrl(ProductController.Default, ProductController.GetFilter), {params: 
            {
                categoryTitle: data.categoryTitle,
                filterParam: data.filterParam,
                page: data.page, 
                take: data.take
            }});
        const error : IExceptionHandleResponse = request.data as IExceptionHandleResponse;
        if ('StatusCode' in error) {
           throw error;
        }
        const response : IPaginateResponse<IProduct> = request.data as IPaginateResponse<IProduct>;
        if (response) {         
            dispatch(productSlice.actions.initProducts(response));
        }
    } catch (e) {
        const error = e as IExceptionHandleResponse;
        if (error) {
            dispatch(productSlice.actions.initError(error.Message));
        }
        else {
            dispatch(productSlice.actions.initError(defaultErrorMessage));
        }
    }
}

export const GetProduct = (article: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.initLoading());
        const request = await http.get<IProduct | IExceptionHandleResponse>(GetApiUrl(ProductController.Default, ProductController.Get), {params: 
            {
                article: article,
            }});
        const error : IExceptionHandleResponse = request.data as IExceptionHandleResponse;
        if ('StatusCode' in error) {
           throw error;
        }
        const response : IProduct = request.data as IProduct;
        if (response) {         
            dispatch(productSlice.actions.initSelectProduct(response));
        }
    } catch (e) {
        const error = e as IExceptionHandleResponse;
        if (error) {
            dispatch(productSlice.actions.initError(error.Message));
        }
        else {
            dispatch(productSlice.actions.initError(defaultErrorMessage));
        }
    }
}

export const RemoveProduct = (product: IProduct) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.initLoading());
        const request = await http.delete<any | IExceptionHandleResponse>(GetApiUrl(ProductController.Default, ProductController.Remove), {data: product.article});
        const error : IExceptionHandleResponse = request.data as IExceptionHandleResponse;
        if ('StatusCode' in error) {
           throw error;
        }
    } catch (e) {
        const error = e as IExceptionHandleResponse;
        if (error) {
            dispatch(productSlice.actions.initError(error.Message));
        }
        else {
            dispatch(productSlice.actions.initError(defaultErrorMessage));
        }
    }
}

export const SelectProduct = (data: IProduct) => (dispatch: AppDispatch) => {
    dispatch(productSlice.actions.initSelectProduct(data));
}