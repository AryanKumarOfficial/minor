import { useNavigate } from "react-router-dom";

const Unauth = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    if (token) {
        navigate('/user/dashboard', { replace: true });
    }
    return children;
}

export default Unauth;
