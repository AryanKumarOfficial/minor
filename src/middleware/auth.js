import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Auth = ({ children }) => {
    const { isAuthenticated, loading, error } = useSelector(state => state.user);
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated && !loading) {
            navigate('/user/login');
        }
    }, [isAuthenticated, loading, error]);

    return children;
}

export default Auth;
