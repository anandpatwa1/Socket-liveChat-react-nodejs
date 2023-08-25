import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
    user: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
    otp : null
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(verifyOtp.pending, (state) => {
                state.isLoading = true
            })
            .addCase(verifyOtp.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                console.log(action.payload);
                state.user = action.payload
            })
            .addCase(verifyOtp.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
        // .addCase(login.pending, (state) => {
        //     state.isLoading = true
        // })
        // .addCase(login.fulfilled, (state, action) => {
        //     state.isLoading = false
        //     state.isSuccess = true
        //     state.user = action.payload
        // })
        // .addCase(login.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.isSuccess = false
        //     state.isError = true
        //     state.message = action.payload
        // })
    }
})

export const verifyOtp = createAsyncThunk('api/register', async (user) => {
    try {
        return await authService.verifyOtp(user)
    } catch (error) {
        const massage = error.response.data.message
        return thunkAPI.rejectWithValue(massage)
    }
})
export const login = createAsyncThunk('api/register', async (user) => {
    try {
        return await authService.loginUser(user)
    } catch (error) {
        const massage = error.response.data.message
        return thunkAPI.rejectWithValue(massage)
    }
})

export default authSlice.reducer