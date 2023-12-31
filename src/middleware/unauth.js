import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UnAuth = ({ children }) => {
    const { isAuthenticated, loading, error } = useSelector(state => state.user);
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuthenticated && !loading) {
            navigate('/user/dashboard/profile');
        }
    }, [isAuthenticated, loading, error, navigate]);
    return children;
}

export default UnAuth;
