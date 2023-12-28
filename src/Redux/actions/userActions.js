import { createAsyncThunk } from "@reduxjs/toolkit";
const host = 'http://localhost:5000';
export const loginUser = createAsyncThunk('user/loginUser', async (credentials) => {
    try {
        const res = await fetch(`${host}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!res.ok) {
            throw new Error('Login failed');
        }

        const data = await res.json();
        const { token, user } = data;
        return { token, user };
    } catch (error) {
        throw error.message;
    }
});