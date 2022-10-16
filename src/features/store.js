import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import postReducer from "./postsSlice";
export const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: postReducer
    },
});
