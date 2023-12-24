import { useNavigate } from "react-router-dom";

export default ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    if (token) {
        navigate('/user/dashboard', { replace: true });
    }
    return children;
}
