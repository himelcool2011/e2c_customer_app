import { createSlice } from "@reduxjs/toolkit";

interface CartInitState{
    show:boolean,
    items:[]
}

const initialState:CartInitState = {
    show:false,
    items:[]
}

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers:{
        showCart: (state)=>{
            state.show=true
        },
        closeCart: (state)=>{
            state.show = false
        }
    }
})

export const {showCart, closeCart} = cartSlice.actions;
export default cartSlice.reducer;