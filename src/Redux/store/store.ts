import {combineReducers, configureStore} from "@reduxjs/toolkit";
import categorySlice from "../reducers/categoryReducer/categorySlice";
import productSlice from "../reducers/productReducer/productSlice";

const rootReducer = combineReducers({
    categoryReducer: categorySlice,
    productReducer: productSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']