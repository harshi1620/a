 import {createSlice} from '@reduxjs/toolkit'


 let slice = createSlice({
    name: "count",
    initialState:{value:100},
    reducers:{
    Inc:(state)=>{
        state.value+=1

    },
    Dec:()=>{
      state.value-=1
    }
}
 })

 export default slice.reducer

 export const {Inc,Dec}=slice.actions
