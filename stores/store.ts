import { configureStore } from "@reduxjs/toolkit";
import modalSliceReducer   from "./slices/modal-slice";

export const appStore = ()=>{
    return configureStore({
        reducer: {
            modalReducer:modalSliceReducer    
        }
    })
}

export type AppStore = ReturnType<typeof appStore>
export type RootState = ReturnType< AppStore['getState']>
export type AppDispatch = AppStore['dispatch']