import { useNavigate } from "react-router-dom";

export default ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (!token || !user) {
        navigate('/user/login', { replace: true });
    }
    return children;
}