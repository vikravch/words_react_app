import {createAsyncThunk} from "@reduxjs/toolkit";
import {login} from "../../domain/model/UserUseCases";

export const loginAsyncAction = createAsyncThunk(
    'auth/login',
    (
        {userLogin, password}
    ) => {
        return login(userLogin, password);
    }
)
