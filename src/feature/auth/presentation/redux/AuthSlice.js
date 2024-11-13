import {createSlice} from "@reduxjs/toolkit";
import {loginAsyncAction} from "./loginAsyncAction";
import {registerAsyncAction} from "./registerAsyncAction";

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
    },
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
            logout();
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsyncAction.fulfilled,
                (state, action) => {
                    state.isAuthenticated = true;
            })
            .addCase(registerAsyncAction.fulfilled,
                (state, action) => {
                    state.isAuthenticated = true;
            });
    }
});

export const {
    logout
} = AuthSlice.actions;
export default AuthSlice.reducer;
