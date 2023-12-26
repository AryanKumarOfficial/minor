import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UnAuth = ({ children }) => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/user/dashboard', { replace: true });
        }
    }, []);

    return children;
}

export default UnAuth;
