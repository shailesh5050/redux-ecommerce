import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const registerURL="http://localhost:1337/api/auth/local/register";

export const registerRequest=createAsyncThunk("register_auth/register",async (user,thunkAPI)=>{
    const response= await axios.post(registerURL,user);
    return response.data;
    
});
const RegisterSlice=createSlice({
    name: "register_auth",
    initialState: {
        isAuth: false,
        token: null,
        userId: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(registerRequest.pending,(state, action) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(registerRequest.fulfilled,(state, action) => {
            state.loading = false;
            state.error = null;
            state.isAuth = true;
            state.token = action.payload.jwt;
            state.userId = action.payload.user.id;
        })
        .addCase(registerRequest.rejected,(state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.isAuth = false;
            state.token = null;
            state.userId = null;
        })
    }
    


});
export const { logout } = RegisterSlice.actions;

export default RegisterSlice.reducer;