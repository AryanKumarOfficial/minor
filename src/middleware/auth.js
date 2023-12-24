import { useNavigate } from "react-router-dom";

export default ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    if (!token) {
        navigate('/user/login', { replace: true });
    }
    return children;
}