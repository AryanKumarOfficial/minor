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
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.success === false) {
                    state.error = action.payload.msg;
                    state.user = null;
                    state.token = null;
                    state.isAuthenticated = false;
                    return;
                }
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;
                state.error = null;

            })
            .addCase(loginUser.rejected, (state, action) => {
                console.log(action, 'action when rejected');
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