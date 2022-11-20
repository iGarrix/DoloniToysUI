import { defaultErrorMessage } from "../../../Configurations/api";
import { IGetProductFilter } from "../../../Configurations/api/requestmodels/models";
import { ProductController } from "../../../Configurations/api/resources/api.controller";
import http from "../../../Configurations/axios/axios";
import { GetApiUrl, IExceptionHandleResponse, IPaginateResponse } from "../../../Configurations/globals";
import { AppDispatch } from "../../store/store";
import { productSlice } from "./productSlice";
import { ICreateProductRequest, IEditImageProductRequest, IEditProductRequest, IProduct, IRemoveProductRequest } from "./types";

export const GetAllProduct = (page: number, take: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.initLoading());
        const request = await http.get<IPaginateResponse<IProduct> | IExceptionHandleResponse>(GetApiUrl(ProductController.Default, ProductController.GetAll), {
            params:
            {
                page: page,
                take: take,
            }
        });
        const error: IExceptionHandleResponse = request.data as IExceptionHandleResponse;
        if ('StatusCode' in error) {
            throw error;
        }
        const response: IPaginateResponse<IProduct> = request.data as IPaginateResponse<IProduct>;
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
        const request = await http.get<IPaginateResponse<IProduct> | IExceptionHandleResponse>(GetApiUrl(ProductController.Default, ProductController.GetFilter), {
            params:
            {
                categoryTitle: data.categoryTitle,
                filterParam: data.filterParam,
                page: data.page,
                take: data.take
            }
        });
        const error: IExceptionHandleResponse = request.data as IExceptionHandleResponse;
        if ('StatusCode' in error) {
            throw error;
        }
        const response: IPaginateResponse<IProduct> = request.data as IPaginateResponse<IProduct>;
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
        const request = await http.get<IProduct | IExceptionHandleResponse>(GetApiUrl(ProductController.Default, ProductController.Get), {
            params:
            {
                article: article,
            }
        });
        const error: IExceptionHandleResponse = request.data as IExceptionHandleResponse;
        if ('StatusCode' in error) {
            throw error;
        }
        const response: IProduct = request.data as IProduct;
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

export const CreateProduct = (data: ICreateProductRequest) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.initLoading());
        const form: FormData = new FormData();
        form.append("Title", data.title);
        form.append("UaTitle", data.uatitle);
        for (let index = 0; index < data.images.length; ++index) {
            form.append("Images", data.images[index]);
        }
        form.append("Description", data.description);
        form.append("UaDescription", data.uadescription);
        form.append("Rating", `${data.rating}`);
        form.append("Article", data.article);
        form.append("Size", data.size);
        form.append("CategoryTitle", data.categoryTitle);
        if (form) {
            const request = await http.post<any | IExceptionHandleResponse>(GetApiUrl(ProductController.Default, ProductController.Add), form);
            const error: IExceptionHandleResponse = request.data as IExceptionHandleResponse;
            if ('StatusCode' in error) {
                throw error;
            }
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
export const EditImageProduct = (data: IEditImageProductRequest) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.initLoading());
        const form: FormData = new FormData();
        form.append("Article", data.article);
        form.append("ImageKey", data.imageKey);
        form.append("NewImage", data.newImage);
        if (form) {
            const request = await http.put<any | IExceptionHandleResponse>(GetApiUrl(ProductController.Default, ProductController.ChangeImage), form);
            const error: IExceptionHandleResponse = request.data as IExceptionHandleResponse;
            if ('StatusCode' in error) {
                throw error;
            }
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
export const EditProduct = (data: IEditProductRequest) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.initLoading());
        const request = await http.put<any | IExceptionHandleResponse>(GetApiUrl(ProductController.Default, ProductController.Change), data);
        const error: IExceptionHandleResponse = request.data as IExceptionHandleResponse;
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

export const RemoveProduct = (product: IProduct) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.initLoading());
        const model: IRemoveProductRequest = {
            article: product.article
        }
        const request = await http.delete<any | IExceptionHandleResponse>(GetApiUrl(ProductController.Default, ProductController.Remove), { data: model });
        const error: IExceptionHandleResponse = request.data as IExceptionHandleResponse;
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