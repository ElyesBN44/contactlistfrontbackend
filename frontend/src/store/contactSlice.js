import { createSlice } from "@reduxjs/toolkit";
const contactSlice = createSlice({

name:"contactElement",
initialState:[{
    name:"elyes redux",
    lastName:"redux lastname",
    age:22,
    email:"elyes@redux.com"
},
{
    name:"aamar redux",
    lastName:"redux lastname",
    age:21,
    email:"aamar@redux.com"
}


],
reducers:{
    setContact:(state,action)=>{
        return action.payload
    }
}
})
export const {setContact} = contactSlice.actions

export default contactSlice.reducer