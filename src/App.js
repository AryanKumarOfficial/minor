import React, { useContext, useState, useEffect } from 'react';
import './index.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import About from './components/About';
import Home from './Home';
import { HeaderComponent, LogoSectionComponent, NavbarComponent } from './components/Navbar';
import Footer from './components/Footer';
import UsrReg from './components/client/Register'
import UsrLogin from './components/client/Login'
import UsrDashboard from './components/client/Dashboard'
import AuthorizeUsr from './middleware/auth';
import UnauthorizeUsr from './middleware/unauth';
import LoadingBar from 'react-top-loading-bar'
import useAuthToken from './context/hooks/useAuthToken';
import UserContext from '../src/context/client/UserContext';
import Navbar from './components/client/Navbar';
import toast from 'react-hot-toast';
import TransitionExample from './components/Trans';
import NotFound from './components/404';
import UsrAppointments from './components/client/Appointments';

const App = () => {
    const { checkTokenExpiration, getToken } = useAuthToken();
    const { showToast } = useContext(UserContext);
    const [progress, setProgress] = useState(0);
    const [hideNav, setHideNav] = useState(false);
    const [token, setToken] = useState(null);
    const [JWT, setJWT] = useState(getToken());
    const navigate = useNavigate();

    useEffect(() => {
        setProgress(100);
        setJWT(getToken());
        if (JWT) {
            setHideNav(true);
        }
        const timer = setTimeout(() => {
            toast.dismiss();
        }, 2000);

        return () => {
            clearTimeout(timer);
            setProgress(0);
        };
    }, [JWT, token, hideNav, navigate]);

    const handleLogout = () => {
        // Perform logout logic here
        setHideNav(false);
        navigate('/user/login'); // Redirect to login page
    };

    return (
        <>
            <LoadingBar
                color='#f11946'
                height={3}
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            {!hideNav && (
                <>
                    <HeaderComponent />
                    <LogoSectionComponent />
                    <NavbarComponent />
                </>
            )}
            {
                hideNav && (
                    <Navbar handleLogout={handleLogout} />
                )
            }
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/user/register" element={<UnauthorizeUsr><UsrReg /></UnauthorizeUsr>} />
                <Route path="/user/login" element={<UnauthorizeUsr><UsrLogin /></UnauthorizeUsr>} />
                <Route path="/user/dashboard/profile" element={<AuthorizeUsr><UsrDashboard /></AuthorizeUsr>} />
                <Route path="/user/dashboard/appointments" element={<><UsrAppointments /></>} />
                <Route path="/about" element={<About />} />
                <Route path="/effect" element={<TransitionExample />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
