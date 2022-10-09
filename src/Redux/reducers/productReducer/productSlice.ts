import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPaginateResponse } from "../../../Configurations/globals";
import { IProduct, IProductState } from "./types";

const initialState: IProductState = {
    products: null,
    selectedProduct: null,
    isLoading: false,
    error: "",
    successMessage: "",
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        initProducts(state: IProductState, action: PayloadAction<IPaginateResponse<IProduct>>) {
            state.products = action.payload;
            state.isLoading = false;
            state.error = '';
            state.successMessage = '';
        },
        initSelectProduct(state: IProductState, action: PayloadAction<IProduct>) {
            state.selectedProduct = action.payload;
            state.isLoading = false;
            state.error = "";
        },
        initError(state: IProductState, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isLoading = false;
            state.successMessage = '';
            state.products = null;
            state.selectedProduct = null;
        },
        initLoading(state: IProductState) {
            state.isLoading = true;
            state.successMessage = '';
        },
        initSuccess(state: IProductState, action: PayloadAction<string>) {
            state.successMessage = action.payload;
            state.isLoading = false;
        },
        ClearAll(state: IProductState) {
            state.products = null;
            state.selectedProduct = null;
            state.isLoading = false;
            state.error = '';
            state.successMessage = '';
        }
    },
})

export default productSlice.reducer;
