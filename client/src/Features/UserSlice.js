import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../Exampledata";
import axios from 'axios';


// const initialState = { value: UsersData };

//set the initial state
const initialState = {
    user: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
  }; 

//create the thunks
export const registerUser=createAsyncThunk("users/registerUser",async(userData)=>{
  try{
    const res= await axios.post("http://localhost:3001/registerUser",{
      name:userData.name,
      email: userData.email,
      password: userData.password
    } 
  );
  console.log(res);
  const user = res.data.user; //retrieve the response from the server
  return user; //return the response from the server as payload to the thunk.

  }catch(error){
    
    console.log(error);
  }
});

export const userSlice = createSlice({
  name: "users", //name of the state
  initialState, // initial value of the state
  // reducers: {
  //   addUser: (state, action) => {
  //     state.value.push(action.payload);
  //   },
  //   deleteUser: (state, action) => {
  //     state.value = state.value.filter((user) => user.email !== action.payload);
  //   },
  //   updateUser: (state, action) => {
  //     state.value.map((user) => {
  //       //iterate the  array and compare the email with the email from the payload
  //       if (user.email === action.payload.email) {
  //         user.name = action.payload.name;
  //         user.password = action.payload.password;
  //       }
  //     });
  //   },
  // },
  extraReducers: (builder)=>{
 //Asynchronous actions that update the state directly,
 builder
 .addCase(registerUser.pending,(state)=>{
 state.isLoading=true;
 })
 .addCase(registerUser.fulfilled, (state, action) => {
  state.isLoading = true;
 })
  .addCase(registerUser.rejected, (state) => {
  state.isLoading = false;
 })
  }
 });

export const { addUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
