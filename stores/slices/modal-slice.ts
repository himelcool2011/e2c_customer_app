import { createSlice } from "@reduxjs/toolkit"

interface ModalState{
    show:boolean
}

const initialState : ModalState  = {
    show:false
}

export const modalSlice = createSlice({
    name: 'modalstate',
    initialState,
    reducers:{
        show: (state)=>{
            state.show = true
        },
        close: (state)=>{
            state.show = false
        }
    }
})

export const {show, close} = modalSlice.actions
export default modalSlice.reducer