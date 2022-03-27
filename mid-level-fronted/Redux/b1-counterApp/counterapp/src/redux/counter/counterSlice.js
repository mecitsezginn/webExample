import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState:{
        value: 4
    },
    reducers:{
        increment: (state)=>{
            state.value += 1
            console.log(state)
        },
        decrement: (state)=>{
            state.value -= 1
        },
        incrementByAmount: (state, action)=> {
            state.value += Number(action.payload)
        }
    }
})

export const { increment,decrement,incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;