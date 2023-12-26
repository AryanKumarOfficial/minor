import React, { useContext } from 'react';
import './index.css';
import { Routes, Route } from "react-router-dom";
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

const App = () => {
    const { checkTokenExpiration } = useAuthToken()
    const { showToast } = useContext(UserContext)
    const [progress, setProgress] = React.useState(0)
    React.useEffect(() => {
        setProgress(100);
        const token = checkTokenExpiration();
        if (!token) {
            showToast('Session expired, please login again', 'error')
        }

        return () => {
            setProgress(0);
        };
    }, []);
    return (
        <>
            <LoadingBar
                color='#f11946'
                height={3}
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <HeaderComponent />
            <LogoSectionComponent />
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/user/register" element={<UnauthorizeUsr><UsrReg /></UnauthorizeUsr>} />
                <Route path="/user/login" element={<UnauthorizeUsr><UsrLogin /></UnauthorizeUsr>} />
                <Route path="/user/dashboard" element={<AuthorizeUsr><UsrDashboard /></AuthorizeUsr>} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App