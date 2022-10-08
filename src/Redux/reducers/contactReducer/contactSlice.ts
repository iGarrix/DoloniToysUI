import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IContactState } from "./types";


const initialState : IContactState = {
    isLoading: false,
    error: "",
    successMessage: ""
}

export const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        onSuccess(state: IContactState, action: PayloadAction<string>)
        {
            state.successMessage = action.payload;
            state.isLoading = false;
        },
        onError(state: IContactState, action: PayloadAction<string>)
        {
            state.error = action.payload;
            state.isLoading = false;
        },
        onLoading(state: IContactState)
        {
            state.isLoading = true;
        },
    }
});

export default contactSlice.reducer;