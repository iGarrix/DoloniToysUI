import { IBaseReducerState } from "../../../Configurations/globals";
import * as Yup from "yup";

export interface IContactState extends IBaseReducerState {

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