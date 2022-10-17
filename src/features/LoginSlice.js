import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const loginURL="http://localhost:1337/api/auth/local";
const registerURL="http://localhost:1337/api/auth/local/register";

export const loginRequest=createAsyncThunk("login_auth/login",async (user,thunkAPI)=>{
    const response= await axios.post(loginURL,user);
    return response.data;
    
});
const LoginSlice=createSlice({
    name: "login_auth",
    initialState: {
        isAuth: false,
        token: null,
        userId: null,
        loading: false,
        error: null,
    },
    reducers: {
       
        logout:{
            reducer(state, action) {
                state.isAuth = false;
                state.token = null;
                state.userId = null;
            }
        },

    },
    extraReducers(builder) {
        builder
            .addCase(loginRequest.pending,(state, action) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(loginRequest.fulfilled,(state, action) => {
            state.loading = false;
            state.error = null;
            state.isAuth = true;
            state.token = action.payload.jwt;
            state.userId = action.payload.user.id;
            
        })
        .addCase(loginRequest.rejected,(state, action) => {
            state.loading = false;
            state.error = "Invalid Credentials";
            state.isAuth = false;
            state.token = null;
            state.userId = null;
        })
    }
    


});
export const { logout } = LoginSlice.actions;

export default LoginSlice.reducer;