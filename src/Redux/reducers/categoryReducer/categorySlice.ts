import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPaginateResponse } from "../../../Configurations/globals";
import { ICategory, ICategoryState } from "./types";

const initialState: ICategoryState = {
    categories: null,
    selectedCategory: null,
    isLoading: false,
    error: "",
    successMessage: "",
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        initCategories(state: ICategoryState, action: PayloadAction<IPaginateResponse<ICategory>>) {
            state.categories = action.payload;
            state.isLoading = false;
            state.error = '';
            state.successMessage = '';
        },
        initSelectedCategory(state: ICategoryState, action: PayloadAction<ICategory>) {
            state.selectedCategory = action.payload;
            state.isLoading = false;
            state.error = '';
            state.successMessage = '';
        },
        initError(state: ICategoryState, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isLoading = false;
            state.successMessage = '';
        },
        initLoading(state: ICategoryState) {
            state.isLoading = true;
            state.successMessage = '';
        },
        initSuccess(state: ICategoryState, action: PayloadAction<string>) {
            state.successMessage = action.payload;
            state.isLoading = false;
        },
        disposeSelection(state: ICategoryState) {
            state.selectedCategory = null;
        },
        ClearAll(state: ICategoryState) {
            state.categories = null;
            state.selectedCategory = null;
            state.isLoading = false;
            state.error = '';
            state.successMessage = '';
        }
    },
})

export default categorySlice.reducer;
