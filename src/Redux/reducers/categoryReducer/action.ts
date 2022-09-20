import { defaultErrorMessage } from "../../../Configurations/api";
import { CategoryController } from "../../../Configurations/api/resources/api.controller";
import http from "../../../Configurations/axios/axios";
import { GetApiUrl, IExceptionHandleResponse, IPaginateResponse } from "../../../Configurations/globals";
import { AppDispatch } from "../../store/store";
import { categorySlice } from "./categorySlice";
import { ICategory } from "./types";

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