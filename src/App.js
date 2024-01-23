import React, { useState, useEffect } from 'react';
import './index.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import About from './components/About';
import Home from './Home';
import { HeaderComponent, LogoSectionComponent, NavbarComponent } from './components/Navbar';
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
import Contact from './components/Contact';
import Layout from './components/client/Layout';
import Verify from './components/client/Verify';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Demo from './components/Demo';
import Faq from './components/Faq';
import HospitalLogin from './components/hospital/Login';

const App = () => {
    const { token, isAuthenticated } = useSelector(state => state.user);
    const [progress, setProgress] = useState(0);
    const [hideNav, setHideNav] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setProgress(100);
        if (isAuthenticated) {
            setHideNav(true);
        }
        const timer = setTimeout(() => {
            toast.dismiss();
        }, 2000);

        return () => {
            clearTimeout(timer);
            setProgress(0);
        };
    }, [token, hideNav, navigate, isAuthenticated]);

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
            {!isAuthenticated ? (
                <>
                    <HeaderComponent />
                    <LogoSectionComponent />
                    <NavbarComponent />
                </>
            ) :
                (
                    <Navbar handleLogout={handleLogout} />
                )}
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/user/register" element={<UnauthorizeUsr><UsrReg /></UnauthorizeUsr>} />
                <Route path="/user/login" element={<UnauthorizeUsr><UsrLogin /></UnauthorizeUsr>} />
                <Route path="/user/dashboard/profile" element={<AuthorizeUsr><UsrDashboard /></AuthorizeUsr>} />
                <Route path="/user/dashboard/appointments" element={<AuthorizeUsr><UsrAppointments /></AuthorizeUsr>} />
                <Route path="/about" element={<About />} />
                <Route path="/effect" element={<TransitionExample />} />
                <Route path="/contact" element={<Contact />} />
                <Route exact path="/layout" element={<Layout />} />
                {/* <Route path="/layout/:id" element={<Layout />} /> */} {/* This is for the dynamic route */}
                <Route path="/user/verify/:token" element={<UnauthorizeUsr><Verify /></UnauthorizeUsr>} />
                <Route path="/demo" element={<Demo />} />
                <Route path='/privacy' element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/faq" element={<Faq />} />
                <Route path ='/hospital/login' element={<UnauthorizeUsr><HospitalLogin /></UnauthorizeUsr>} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
