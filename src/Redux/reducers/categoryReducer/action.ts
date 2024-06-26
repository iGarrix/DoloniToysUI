import { defaultErrorMessage } from "../../../Configurations/api";
import { CategoryController } from "../../../Configurations/api/resources/api.controller";
import http, { auth_http } from "../../../Configurations/axios/axios";
import { GetApiUrl, IExceptionHandleResponse, IPaginateResponse } from "../../../Configurations/globals";
import { AppDispatch } from "../../store/store";
import { categorySlice } from "./categorySlice";
import { ICategory, ICreateCategoryRequest, IEditCategoryRequest } from "./types";

export const GetAllCategory = (page: number, take: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.initLoading());
        const request = await http.get<IPaginateResponse<ICategory> | IExceptionHandleResponse>(GetApiUrl(CategoryController.Default, CategoryController.GetAll), {params: {page: page, take: take}});
        const error : IExceptionHandleResponse = request.data as IExceptionHandleResponse;
        if ('StatusCode' in error) {
           throw error;
        }
        const response : IPaginateResponse<ICategory> = request.data as IPaginateResponse<ICategory>;
        if (response) {         
            dispatch(categorySlice.actions.initCategories(response));
        }
    } catch (e) {
        const error = e as IExceptionHandleResponse;
        if (error) {
            dispatch(categorySlice.actions.initError(error.Message));
        }
        else {
            dispatch(categorySlice.actions.initError(defaultErrorMessage));
        }
    }
}

export const GetCategory = (title: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.initLoading());
        const request = await http.get<ICategory | IExceptionHandleResponse>(GetApiUrl(CategoryController.Default, CategoryController.Get), {params: {title: title}});
        const error : IExceptionHandleResponse = request.data as IExceptionHandleResponse;
        if ('StatusCode' in error) {
           throw error;
        }
        const response : ICategory = request.data as ICategory;
        if (response) {         
            dispatch(categorySlice.actions.initSelectedCategory(response));
        }
    } catch (e) {
        const error = e as IExceptionHandleResponse;
        if (error) {
            dispatch(categorySlice.actions.initError(error.Message));
        }
        else {
            dispatch(categorySlice.actions.initError(defaultErrorMessage));
        }
    }
}

export const CreateCategory = (data: ICreateCategoryRequest) => async (dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.initLoading());
        const form: FormData = new FormData();
        form.append("Title", data.title);
        form.append("UaTitle", data.uaTitle);
        form.append("Rating", data.rating.toString());
        form.append("Image", data.image);
        if (form) {         
            //const request = await http.post<any | IExceptionHandleResponse>(GetApiUrl(CategoryController.Default, CategoryController.Add), form);
            var token = localStorage.getItem("token");
            if (token) {         
                const request = await auth_http(token).post<any | IExceptionHandleResponse>(GetApiUrl(CategoryController.Default, CategoryController.Add), form);
                const error : IExceptionHandleResponse = request.data as IExceptionHandleResponse;
                if ('StatusCode' in error) {
                   throw error;
                }
            }
        }
    } catch (e) {
        const error = e as IExceptionHandleResponse;
        if (error) {
            dispatch(categorySlice.actions.initError(error.Message));
        }
        else {
            dispatch(categorySlice.actions.initError(defaultErrorMessage));
        }
    }
}

export const EditCategory = (data: IEditCategoryRequest) => async (dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.initLoading());
        const form: FormData = new FormData();
        form.append("Title", data.title);
        form.append("NewTitle", data.newTitle);
        form.append("NewUaTitle", data.newUaTitle);
        form.append("NewRating", data.newRating.toString());
        if (data.newImage) { 
            form.append("NewImage", data.newImage);
        }
        var token = localStorage.getItem("token");
        if (token && form) {          
            const request = await auth_http(token).put<any | IExceptionHandleResponse>(GetApiUrl(CategoryController.Default, CategoryController.Change), form);
            const error: IExceptionHandleResponse = request.data as IExceptionHandleResponse;
            if ('StatusCode' in error) {
                throw error;
            }
            dispatch(categorySlice.actions.disposeSelection());
        }
    } catch (e) {
        const error = e as IExceptionHandleResponse;
        if (error) {
            dispatch(categorySlice.actions.initError(error.Message));
        }
        else {
            dispatch(categorySlice.actions.initError(defaultErrorMessage));
        }
    }
}

export const RemoveCategory = (category: ICategory) => async (dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.initLoading());
        var token = localStorage.getItem("token");
        if (token) {          
            const request = await auth_http(token).delete<any | IExceptionHandleResponse>(GetApiUrl(CategoryController.Default, CategoryController.Remove), {data: category.title});
            const error : IExceptionHandleResponse = request.data as IExceptionHandleResponse;
            if ('StatusCode' in error) {
               throw error;
            }
        }
    } catch (e) {
        const error = e as IExceptionHandleResponse;
        if (error) {
            dispatch(categorySlice.actions.initError(error.Message));
        }
        else {
            dispatch(categorySlice.actions.initError(defaultErrorMessage));
        }
    }
}