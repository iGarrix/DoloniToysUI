import * as Yup from "yup";
import { IBaseReducerState } from "../../../Configurations/globals";

export interface IUser {
    username: string,
    email: string,
    phoneNumber: string,
}

export interface IUserDto extends IUser {
    create: Date,
}

export interface IAccountState extends IBaseReducerState {
    auth: IUser | null,
}

export const LoginScheme = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
});

export interface ILoginData {
    refreshToken: string,
    accessToken: string,
    profile: IUserDto,
}

export interface ILoginRequest {
    email: string,
    password: string,
}