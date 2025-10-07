import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../exampleData";

const initState = {value:UsersData};

export const userSlice= createSlice({
name: "users",
initialState:initState,
reducers:{
    addUser: (state, action)=>{
        state.value.push(action.payload);
    }
}
})

export default userSlice.reducer;