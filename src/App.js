import React, { useContext, useState, useEffect } from 'react';
import './index.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import About from './components/About';
import Home from './Home';
import { Header, HeaderComponent, LogoSection, LogoSectionComponent, NavbarComponent, Navbars } from './components/Navbar';
import Footer from './components/Footer';
import UsrReg from './components/client/Register'
import UsrLogin from './components/client/Login'
import UsrDashboard from './components/client/dashboard/Dashboard';
import AuthorizeUsr from './middleware/auth';
import UnauthorizeUsr from './middleware/unauth';
import LoadingBar from 'react-top-loading-bar'
import Navbar from './components/client/dashboard/Navbar';
import toast from 'react-hot-toast';
import TransitionExample from './components/Trans';
import NotFound from './components/404';
import UsrAppointments from './components/client/dashboard/Appointments';
import { useSelector } from 'react-redux';
// import Demo from './components/Demo';

const App = () => {
    const { token } = useSelector(state => state.user);
    const [progress, setProgress] = useState(0);
    const [hideNav, setHideNav] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setProgress(100);
        if (token) {
            setHideNav(true);
        }
        const timer = setTimeout(() => {
            toast.dismiss();
        }, 2000);

        return () => {
            clearTimeout(timer);
            setProgress(0);
        };
    }, [token, hideNav, navigate]);

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
                {/* <Route path="/demo" element={<Demo />} /> */}
            </Routes>
            <Footer />
        </>
    );
};

export default App;
