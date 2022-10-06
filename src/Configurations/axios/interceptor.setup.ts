
import { accountSlice } from "../../Redux/reducers/accountReducer/accountSlice";
import { ILoginData, ILoginRequest } from "../../Redux/reducers/accountReducer/types";
import { AccountController } from "../api/resources/api.controller";
import { GetApiUrl } from "../globals";
import axiosPrivate from "./axios";

export interface IRefreshModel {
    accessToken: string,
    refreshToken: string,
}

const setup = (store: any) => {
    const { dispatch } = store;
    axiosPrivate.interceptors.response.use(
        (res) => {
            return res;
        },
        async (err) => {
            const originalConfig = err.config;
            if (err.response && err.config) {
                if (err.response.status === 401 && !originalConfig._retry) {
                    originalConfig._retry = true;
                    try {
                        const lsToken = localStorage.getItem("token");
                        const lsRefreshToken = localStorage.getItem("r_token");
                        if (lsToken && lsRefreshToken) {
                            const data: IRefreshModel = {
                                accessToken: lsToken,
                                refreshToken: lsRefreshToken
                            }
                            const rs = await axiosPrivate.post<ILoginData>(GetApiUrl(AccountController.Default, AccountController.RefreshTokenAuthorize), data);
                            const { accessToken } = rs.data;
                            dispatch(accountSlice.actions.onLogin(rs.data));
                            originalConfig.headers['Authorization'] = `Bearer ${accessToken}`;
                            return axiosPrivate(originalConfig);
                        }
                    } catch (_error) {
                        localStorage.removeItem("token");
                        localStorage.removeItem("r_token");
                        dispatch(accountSlice.actions.onLogout);
                        window.location.replace("/login");
                        return Promise.reject(_error);
                    }
                }
            }

            return Promise.reject(err);
        }
    );
};
export default setup;