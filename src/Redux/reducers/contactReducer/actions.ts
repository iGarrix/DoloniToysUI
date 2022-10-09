import { defaultErrorMessage } from "../../../Configurations/api";
import { QuestionController } from "../../../Configurations/api/resources/api.controller";
import http from "../../../Configurations/axios/axios";
import { GetApiUrl, IExceptionHandleResponse, IPaginateResponse } from "../../../Configurations/globals";
import { AppDispatch } from "../../store/store";
import { contactSlice } from "./contactSlice";
import { IContact, ISendContactRequest } from "./types";

export const SendContact = (data: ISendContactRequest) => async (dispatch: AppDispatch) => {
    try {
        dispatch(contactSlice.actions.onLoading());
        const request = await http.post<ISendContactRequest | IExceptionHandleResponse>(GetApiUrl(QuestionController.Default, QuestionController.Add), data);
        const error : IExceptionHandleResponse = request.data as IExceptionHandleResponse;
        if ('StatusCode' in error) {
           throw error;
        }
        const response : ISendContactRequest = request.data as ISendContactRequest;
        if (response) {         
            dispatch(contactSlice.actions.onSuccess("Contact sended"));
        }
    } catch (e) {
        const error = e as IExceptionHandleResponse;
        if (error) {
            dispatch(contactSlice.actions.onError(error.Message));
        }
        else {
            dispatch(contactSlice.actions.onError(defaultErrorMessage));
        }
    }
}

export const GetAllContact = (page: number, take: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(contactSlice.actions.onLoading());
        const request = await http.get<IPaginateResponse<IContact> | IExceptionHandleResponse>(GetApiUrl(QuestionController.Default, QuestionController.Get), {params: {page: page, take: take}});
        const error : IExceptionHandleResponse = request.data as IExceptionHandleResponse;
        if ('StatusCode' in error) {
           throw error;
        }
        const response : IPaginateResponse<IContact> = request.data as IPaginateResponse<IContact>;
        if (response) {         
            dispatch(contactSlice.actions.onInitContacts(response));
        }
    } catch (e) {
        const error = e as IExceptionHandleResponse;
        if (error) {
            dispatch(contactSlice.actions.onError(error.Message));
        }
        else {
            dispatch(contactSlice.actions.onError(defaultErrorMessage));
        }
    }
}