import React, { useState } from 'react';
import UserContext from './UserContext';

const UserProvider = (props) => {
    const host = `https://minor-backend-n2nq.onrender.com`;
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
            const res = await fetch(`${host}/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
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

    const loginUser = async (userData) => {
        try {
            const res = await fetch(`${host}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
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

    const logoutUser = async () => {
        try {
            const res = await fetch(`${host}/api/auth/logout`, {
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

    const getUser = async () => {
        try {
            const res = await fetch(`${host}/api/auth/user`, {
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
