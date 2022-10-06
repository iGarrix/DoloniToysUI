import { defaultErrorMessage } from "../../../Configurations/api";
import { AccountController } from "../../../Configurations/api/resources/api.controller";
import http, { AuthorizateHeader } from "../../../Configurations/axios/axios";
import { GetApiUrl, IExceptionHandleResponse } from "../../../Configurations/globals";
import { AppDispatch } from "../../store/store";
import { accountSlice } from "./accountSlice";
import { ILoginData, ILoginRequest, IUserDto } from "./types";

export const LoginAdmin = (data: ILoginRequest) => async (dispatch: AppDispatch) => {
    try {
        dispatch(accountSlice.actions.onLoading());
        const request = await http.post<ILoginData | IExceptionHandleResponse>(GetApiUrl(AccountController.Default, AccountController.LogInAuthorize), data);
        const error : IExceptionHandleResponse = request.data as IExceptionHandleResponse;
        if ('StatusCode' in error) {
           throw error;
        }
        const response : ILoginData = request.data as ILoginData;
        if (response) {         
            dispatch(accountSlice.actions.onLogin(response));
        }
    } catch (e) {
        const error = e as IExceptionHandleResponse;
        if (error) {
            dispatch(accountSlice.actions.onError(error.Message));
        }
        else {
            dispatch(accountSlice.actions.onError(defaultErrorMessage));
        }
    }
}

export const GetAdmin = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(accountSlice.actions.onLoading());
        const token = localStorage.getItem("token");
        if (token) {          
            const request = await http.get<IUserDto | IExceptionHandleResponse>(GetApiUrl(AccountController.Default, AccountController.GetAuthorize), {headers: AuthorizateHeader(token).headers});
            const error : IExceptionHandleResponse = request.data as IExceptionHandleResponse;
            if ('StatusCode' in error) {
               throw error;
            }
            const response : IUserDto = request.data as IUserDto;
            if (response) {         
                dispatch(accountSlice.actions.onInit(response));
            }
        }
    } catch (e) {
        const error = e as IExceptionHandleResponse;
        if (error) {
            dispatch(accountSlice.actions.onError(error.Message));
        }
        else {
            dispatch(accountSlice.actions.onError(defaultErrorMessage));
        }
    }
}