import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const api_port = process.env.REACT_APP_API_PORT || `http://localhost:5000`;


export const registerUser = createAsyncThunk('user/registerUser', async (credentials) => {
    const request = await fetch(`${api_port}/user/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' // this is for cors error
        },
        body: JSON.stringify(credentials)
    });
    const response = await request.json();
    return response; // this will be the action.payload
})

export const loginUser = createAsyncThunk('user/loginUser', async (credentials) => {
    const request = await fetch(`${api_port}/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });
    const response = await request.json();
    return response; // this will be the action.payload
})


export const logoutUser = createAsyncThunk('user/logoutUser', async (token) => {
    const request = await fetch(`${api_port}/user/logout`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    });
    const response = await request.json();
    return response; // this will be the action.payload
}
)

export const updateUser = createAsyncThunk('user/updateUser', async (data) => {
    const { token, formData } = data;
    const request = await fetch(`${api_port}/user/update`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
    });
    const response = await request.json();
    return response; // this will be the action.payload
});

// appointment related

export const AddAppointment = createAsyncThunk('user/AddAppointment', async (data) => {
    const req = await fetch(`${api_port}/appointment/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    const res = await req.json();
    return res;
})

export const fetchAppointments = createAsyncThunk('user/fetchAppointments', async (data) => {
    const req = await fetch(`${api_port}/appointment/fetch`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)

    })
    const res = await req.json();
    return res;
});


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: false,
        error: null,
        token: null,
        isAuthenticated: false,
        message: null,
        appointments: [],
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
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.loading = false;
                if (!action.payload.success) {
                    state.error = action.payload.msg;
                    state.user = null;
                    state.token = null;
                    state.isAuthenticated = false;
                    console.log(action.payload, 'action.payload when success is false');
                    return;
                }
                else {
                    console.log(action.payload, 'action.payload when success is true');
                    state.user = null;
                    state.token = null;
                    state.isAuthenticated = false;
                    state.error = null;
                    state.appointments = [];
                }
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                if (!action.payload.success) {
                    state.user = null;
                    state.token = null;
                    state.isAuthenticated = false;
                    return;
                }
                else if (action.payload.error === 'Please enter all fields') {
                    state.error = action.payload.error;
                    state.isAuthenticated = false;
                }
                state.user = action.payload.user;
                state.isAuthenticated = true;
                state.error = null;
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                if (!action.payload.success) {
                    if (action.payload.verified) {
                        // user is already registered and verified
                        state.error = `User with email ${action.payload.email} already exists`;
                        state.isAuthenticated = false;
                        state.user = null;
                        state.token = null;
                    }
                    else {
                        // user is already registered but not verified
                        state.error = `User with email ${action.payload.email} already exists, please verify your email`;
                        state.isAuthenticated = false;
                        state.user = null;
                        state.token = null;
                    }
                }
                else {
                    // user is not registered
                    state.error = `Please verify your email ${action.payload.email} to login`;
                    state.isAuthenticated = false;
                    state.user = null;
                    state.token = null;
                }
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(AddAppointment.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(AddAppointment.fulfilled, (state, action) => {
                state.loading = false;
                if (!action.payload.success) {
                    state.error = action.payload?.error;
                    return;
                }
                state.error = null;
                state.message = action.payload?.message;
            })
            .addCase(AddAppointment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchAppointments.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAppointments.fulfilled, (state, action) => {
                state.loading = false;
                if (!action.payload.success) {
                    state.error = action.payload?.error;
                    return;
                }
                state.error = null;
                state.appointments = action.payload?.appointments;
            })
            .addCase(fetchAppointments.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
});

export default userSlice.reducer;