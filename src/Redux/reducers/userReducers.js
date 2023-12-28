import { createSlice } from "@reduxjs/toolkit";
import {
    INCREMENT,
    DECREMENT,
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    LOGIN_USER,
    LOGOUT_USER,
    SET_USER,
    SET_LOADING,
    SET_ERROR,
    SET_ALERT,
    REMOVE_ALERT,
} from "../actions/types";

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
