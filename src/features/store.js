import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./LoginSlice";
import postReducer from "./postsSlice";
import registerReducer from "./RegisterSlice";
export const store = configureStore({
    reducer: {
        login: loginReducer,
        register: registerReducer,
        posts: postReducer
    },
});
