import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAccountState, ILoginData, IUserDto } from "./types";

const initialState : IAccountState = {
    auth: null,
    isLoading: false,
    error: "",
    successMessage: ""
}

export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        onLogin(state: IAccountState, action: PayloadAction<ILoginData>)
        {
            state.auth = action.payload.profile;
            state.isLoading = false;
            state.error = "";
            state.successMessage = "Login is successfully";

            // set token
            localStorage.setItem("token", action.payload.accessToken);
            localStorage.setItem("r_token", action.payload.refreshToken);
        },
        onInit(state: IAccountState, action: PayloadAction<IUserDto>)
        {
            state.auth = action.payload;
            state.isLoading = false;
        },
        onSuccess(state: IAccountState, action: PayloadAction<string>)
        {
            state.successMessage = action.payload;
            state.isLoading = false;
        },
        onError(state: IAccountState, action: PayloadAction<string>)
        {
            state.error = action.payload;
            state.isLoading = false;
        },
        onLoading(state: IAccountState)
        {
            state.isLoading = true;
        },
        onLogout(state: IAccountState)
        {
            state.auth = null;
            state.isLoading = false;
            state.error = "";
            state.successMessage = "";

            localStorage.removeItem("token");
            localStorage.removeItem("r_token");
        }
    }
});

export default accountSlice.reducer;