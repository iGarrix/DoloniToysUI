import {combineReducers, configureStore} from "@reduxjs/toolkit";
import accountSlice from "../reducers/accountReducer/accountSlice";
import categorySlice from "../reducers/categoryReducer/categorySlice";
import productSlice from "../reducers/productReducer/productSlice";

const rootReducer = combineReducers({
    categoryReducer: categorySlice,
    productReducer: productSlice,
    accountReducer: accountSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']