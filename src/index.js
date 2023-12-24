import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import { UserProvider } from './context/client/UserProvider'

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

const Root = () => {
  const [progress, setProgress] = React.useState(0)
  React.useEffect(() => {
    setProgress(100)
    return () => {
      setProgress(0)
    }
  }, [])



  return (
    <>
      <BrowserRouter>
        <UserProvider>
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
        </UserProvider>
      </BrowserRouter>
    </>
  );
}
root.render(<Root />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
