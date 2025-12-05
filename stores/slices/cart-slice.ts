import { CartInitState } from "@/interfaces/cart-init-state";
import { createSlice } from "@reduxjs/toolkit";



const initialState:CartInitState = {
    show:false,
    items:[],
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
        },
        addToCart: (state,action)=>{
            const item = state.items.find(itm=>itm.id==action.payload.id)
            if(!item){
                action.payload['qty']=1;
                state.items.push(action.payload)
            }else{
                item.qty++;
            }
        },
        calculate:(state)=>{
        }

        
    },
})

export const {showCart, closeCart,addToCart,calculate} = cartSlice.actions;
export default cartSlice.reducer;