import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../exampleData";

const initState = {value:UsersData};

export const userSlice= createSlice({
name: "users",
initialState:initState,
reducers:{
    
}
})

export default userSlice.reducer;