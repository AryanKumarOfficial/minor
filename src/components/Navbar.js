import React, { useState } from 'react';
import './Navbar.css';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaLock } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";


const HeaderComponent = () => {
    return (
        <header>
            {/* top section starts */}
            <div className="top-header-area">
                <ul>
                    <li>
                        <Link to="/hospital">
                            <FaLock
                                style={{
                                    color: '#fff',
                                    backgroundColor: '#b15110',
                                    borderRadius: " 50%",
                                    fontSize: '1.2rem',
                                    transition: 'all 0.3s ease-in -out',
                                    padding: '4px'
                                }} />
                            <span>Admin Login</span>
                        </Link>
                    </li>
                    <li>
                        <a href="tel:101">
                            <PiPhoneCallFill
                                style={{
                                    color: '#fff',
                                    backgroundColor: '#b15110',
                                    borderRadius: " 50%",
                                    fontSize: '1.2rem',
                                    transition: 'all 0.3s ease-in -out',
                                    padding: '4px'
                                }} />
                            <span>Helpline:101</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="top-header-socail">
                <ul>
                    <li>
                        <Link to="https://www.facebook.com"><FaFacebook

                        /></Link>
                    </li>
                    <li>
                        <Link to="https://www.instagram.com"><FaInstagram

                        /></Link>
                    </li>
                    <li>
                        <Link to="https://www.twitter.com"><BsTwitterX
                        /></Link>
                    </li>
                    <li>
                        <Link to="www.linkedin.com">
                            <FaLinkedin

                            /></Link>
                    </li>

                </ul>
            </div>
            {/* top section ends */}
        </header>
    );
};

const LogoSectionComponent = () => {
    return (
        <section className="logo-section">
            <div className="logo">
                <Link to={'/'}>
                    <img src={'/images/logo.png'} alt="logo" />
                    <h1>Hospital Management System</h1>
                </Link>
            </div>
            <div className="links">
                <ul>
                    <li style={{ backgroundColor: '#979b16' }}><a href="/user/register">User Login</a></li>
                    <li style={{ backgroundColor: '#4fc0e8' }}>
                        <a href="user/login">Hospital Login</a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

const NavbarComponent = () => {
    const handleToggle = () => {
        const nav = document.querySelector(".navbar ul");
        console.log(nav);
        nav.classList.toggle("active");


    };
    return (
        <nav className="navbar">
            <TiThMenu
                className={`humburger`}
                style={{
                    color: '#fff',
                    fontSize: '2rem',
                    marginRight: '5px',
                    marginLeft: '5px',
                    padding: '5px',
                    alignItems: 'center',
                }}
                onClick={() => {
                    handleToggle();
                }}
                size={40}
            />
            <ul>
                <li>
                    <a href="/"><AiFillHome /></a>
                </li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
            </ul>
        </nav>
    );
};

export { HeaderComponent, LogoSectionComponent, NavbarComponent };
