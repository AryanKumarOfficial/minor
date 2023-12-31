import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuthenticated: false,
        token: null,
        userData: null,
    },
    reducers: {
        loginUser: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.userData = action.payload.userData;

        },
        logoutUser: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.userData = null;
        },
    },
})

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
