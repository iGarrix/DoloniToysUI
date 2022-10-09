import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { IPaginateResponse } from "../../../Configurations/globals";
import { IContact, IContactState } from "./types";


const initialState : IContactState = {
    contacts: null,
    isLoading: false,
    error: "",
    successMessage: "",
}

export const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        onInitContacts(state: IContactState, action: PayloadAction<IPaginateResponse<IContact>>) 
        {
            state.contacts = action.payload;
            state.successMessage = "Success";
            state.isLoading = false;
        },
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
        onClear(state: IContactState) 
        {
            state.contacts = null;
            state.error = "";
            state.successMessage = "";
            state.isLoading = false;
        }
    }
});

export default contactSlice.reducer;