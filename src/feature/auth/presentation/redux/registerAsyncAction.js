import {createAsyncThunk} from "@reduxjs/toolkit";
import {register} from "../../domain/model/UserUseCases";

export const registerAsyncAction = createAsyncThunk(
    'auth/register', (
        {email, password, userName}
    ) => {
        return register(email, password, userName);
    }
)
