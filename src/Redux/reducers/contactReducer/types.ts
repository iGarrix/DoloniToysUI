import { IBaseReducerState, IPaginateResponse } from "../../../Configurations/globals";
import * as Yup from "yup";

export interface IContact {
    name: string,
    email: string,
    message: string,
    create: Date,
}

export interface IContactState extends IBaseReducerState {
    contacts: IPaginateResponse<IContact> | null,
}

export interface ISendContactRequest {
    name: string,
    email: string,
    message: string,
}

export const SendContactScheme = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Email is incorrect").required("Email is required"),
    message: Yup.string().required("Message is required"),
});