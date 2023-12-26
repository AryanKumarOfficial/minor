import React from 'react';
import './Footer.css';
import { PiPhoneCallFill } from 'react-icons/pi';
import { IoIosMail } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="wrapper">
                <div className="logo-section">
                    <Link
                        to={'/'}
                        className='flex flex-col items-center justify-center space-y-2 transition-all cursor-default'
                    >
                        <Logo
                            className='peer border-8 p-1 border-[#fff] rounded-full w-16 h-16 hover:scale-105 transition-all hover:border-[#07294d] shadow-2xl md:w-1/2 md:mx-auto md:my-0 md:mt-10 md:mb-10 cursor-pointer outline-emerald-700 outline-double outline-8'
                            fill={'#fff'}
                        />
                        <p className='peer-hover:text-white transition-all pt-4'>
                            Connecting Patients to Care, Anytime, Anywhere.
                        </p>
                    </Link>
                </div>
                <div className="quick">
                    <h5>
                        Quick Links
                    </h5>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/hospital">Find Hospital</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/terms">Terms & Conditions</Link></li>
                    </ul>
                </div>
                <div className="contact">
                    <h5>
                        Get in Touch
                    </h5>
                    <ul>
                        <li>
                            <Link to="tel:+918235172505">
                                <div className="icon">
                                    <PiPhoneCallFill />
                                    <span>Phone:</span>
                                </div>
                                <span>+918235172505</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="mailto:support@hospitalo.com">
                                <div className="icon">
                                    < IoIosMail />
                                    <span>Mail:</span>
                                </div>
                                <span>support@hospitalo.com</span>
                            </Link>
                        </li>

                        <li>
                            <Link to={`http://bit.ly/hospitalo`}>
                                <div className="icon">
                                    < FaLocationDot />
                                    <span>Address:</span>
                                </div>
                                <span>Chankaya Boy's Hostel</span>
                            </Link>
                        </li>

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
