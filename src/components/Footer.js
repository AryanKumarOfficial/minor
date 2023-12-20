import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="wrapper">
                <div className="quick">
                    <h5>
                        Quick Links
                    </h5>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </div>
                <div className="quick">
                    <h5>
                        Quick Links
                    </h5>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </div>
                <div className="quick">
                    <h5>
                        Quick Links
                    </h5>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="copy bg-[#05224c] w-full text-center">
                <p>
                    &copy; {new Date().getFullYear()} All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
