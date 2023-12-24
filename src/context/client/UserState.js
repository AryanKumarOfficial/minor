import React, { useState } from 'react';
import UserContext from './UserContext';
import toast, { ToastBar, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const UserProvider = (props) => {
    const navigate = useNavigate();
    // const host = `https://minor-backend-n2nq.onrender.com`;
    const host = `http://localhost:5000`;
    const authToken = localStorage.getItem('token');

    // Define initial state
    const initialUserState = {
        data: null,
        error: null,
    };

    // Create state with initial state
    const [user, setUser] = useState(initialUserState);

    // Define functions

    const registerUser = async (userData) => {
        try {
            const res = await fetch(`${host}/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            const data = await res.json();
            if (data.success) {
                toast.success('User registered successfully');
                setUser({
                    ...user,
                    data,
                    error: null,
                });
            }
            else {
                toast.error(data.msg);
            }
        } catch (error) {
            setUser({
                ...user,
                data: null,
                error: error.message,
            });
        }
    };

    const loginUser = async (userData) => {
        try {
            const res = await fetch(`${host}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            const data = await res.json();
            if (data.success) {
                toast.success('User logged in successfully');
                setUser({
                    ...user,
                    data,
                    error: null,
                });
                localStorage.setItem('token', data.token);
                setTimeout(() => {
                    navigate('/user/dashboard', {
                        replace: true,

                    });
                }, 2000);
            }
            else {
                toast.error(data.msg);
            }
        } catch (error) {
            setUser({
                ...user,
                data: null,
                error: error.message,
            });
        }
    };

    const logoutUser = async () => {
        try {
            const res = await fetch(`${host}/user/logout`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authToken}`,
                },
            });
            const data = await res.json();
            if (data.success) {
                toast.success('User logged out successfully');
                setUser({
                    ...user,
                    data: null,
                    error: null,
                });
            }

        } catch (error) {
            setUser({
                ...user,
                data: null,
                error: error.message,
            });
        }
    };

    const getUser = async () => {
        try {
            const res = await fetch(`${host}/user/get`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authToken}`,
                },
            });
            const data = await res.json();
            setUser({
                ...user,
                data,
                error: null,
            });

        } catch (error) {
            setUser({
                ...user,
                data: null,
                error: error.message,
            });
        }
    };

    // Provide the context value
    const contextValue = {
        user,
        registerUser,
        loginUser,
        logoutUser,
        getUser,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;
