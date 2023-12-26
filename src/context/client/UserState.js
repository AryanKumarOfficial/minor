import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from './UserContext';
import useAuthToken from '../hooks/useAuthToken';

const UserProvider = (props) => {
    const navigate = useNavigate();
    const host = process.env.REACT_APP_API_HOST || 'http://localhost:5000';
    const authToken = localStorage.getItem('token');
    const { saveToken: updateToken, removeToken } = useAuthToken();

    useEffect(() => {
        updateToken(authToken);
    }, [authToken, updateToken]);

    const initialState = {
        data: null,
        error: null,
    };

    const [user, setUser] = useState(initialState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const config = {
                    method: 'get',
                    url: `${host}/user/get`,
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                        'Content-Type': 'application/json',
                    },
                };

                const res = await axios(config);
                setUser({
                    ...user,
                    data: res.data,
                    error: null,
                });
            } catch (error) {
                setUser({
                    ...user,
                    data: null,
                    error: error.message || 'An error occurred',
                });
            }
            finally {
                setLoading(false);
            }
        }
        if (authToken) {
            fetchUser();
        }
    }, [authToken]);

    const handleApiError = (error) => {
        if (['JsonWebTokenError', 'UnauthorizedError', 'TokenExpiredError'].includes(error.name)) {
            removeToken();
            navigate('/user/login', { replace: true });
        } else {
            setUser({
                ...user,
                data: null,
                error: error.message || 'An error occurred',
            });
        }
    };

    const handleApiSuccess = (data) => {
        setUser({
            ...user,
            data,
            error: null,
        });
    };


    const showToast = (message, type) => {
        const { [type]: toastType } = toast;
        toastType(message, {
            duration: 2000,
        });
    };
    const makeApiCall = async (config) => {
        try {
            const res = await axios(config);
            handleApiSuccess(res.data);
            showToast(res.data.msg, res?.data?.success ? 'success' : 'error');
            return res.data;
        } catch (error) {
            handleApiError(error);
            showToast(error.response?.data?.msg || 'An error occurred', 'error');
            throw error; // rethrow error for additional error handling, if needed
        }
    };

    const registerUser = async (formData) => {
        const config = {
            method: 'post',
            url: `${host}/user/register`,
            data: formData,
        };

        await makeApiCall(config);
        console.log(user, 'user');
        setTimeout(() => {
            navigate('/user/login', { replace: true });
        }, 2000);
    };

    const loginUser = async (formData) => {
        const config = {
            method: 'post',
            url: `${host}/user/login`,
            data: formData,
        };

        const data = await makeApiCall(config);
        console.log(data, 'data');
        updateToken(data.token);
        setTimeout(() => {
            data?.success && navigate('/user/dashboard', { replace: true });
        }, 2000);
    };

    const logoutUser = async () => {
        const config = {
            method: 'get',
            url: `${host}/user/logout`,
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },

        };

        const data = await makeApiCall(config);
        showToast(data.msg, data.success ? 'success' : 'error');
        removeToken();
        setTimeout(() => {
            navigate('/user/login', { replace: true });
        }, 2000);
    };

    const getUser = async () => {
        const config = {
            method: 'get',
            url: `${host}/user/get`,
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },

        };

        const data = await makeApiCall(config);
        setUser(data);
    };

    const updateUser = async (formData) => {
        const config = {
            method: 'put',
            url: `${host}/user/update`,
            data: formData,
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },


        };

        const data = await makeApiCall(config);
        setUser(data);

    };

    const contextValue = {
        user,
        loading,
        registerUser,
        loginUser,
        logoutUser,
        getUser,
        updateUser,
        authToken,
        showToast,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;
