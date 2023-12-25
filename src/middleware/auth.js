import { useNavigate } from "react-router-dom";

const Auth = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    if (!token) {
        navigate('/user/login', { replace: true });
    }
    return children;
}

export default Auth;