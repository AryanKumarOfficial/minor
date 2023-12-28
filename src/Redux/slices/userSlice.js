import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk('user/loginUser', async (credentials) => {
    const request = await fetch('http://localhost:5000/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });
    const response = await request.json();
    const { token, user } = response;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    return response; // this will be the action.payload
})

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: false,
        error: null,
        token: null,
        isAuthenticated: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.user = null;
                state.token = null;
                state.isAuthenticated = false;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.token = null;
                state.isAuthenticated = false;
                console.log(action.error.message, 'action.error.message');
                console.log(action.payload, 'action.payload');
                if (action.payload.msg === 'User does not exists') {
                    state.error = 'User does not exists';
                }
                else if (action.payload.msg === 'Invalid credentials') {
                    state.error = 'Invalid credentials';
                }
                else {
                    state.error = action.error.message;
                }
            })
    }
},
);

export default userSlice.reducer;