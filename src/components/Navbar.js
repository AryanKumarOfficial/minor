import React, { useContext } from 'react';
import './Navbar.css';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaLock } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { MdLogout } from "react-icons/md";
import UserContext from '../context/client/UserContext';
import Logo from './Logo';
import { IoIosWallet } from "react-icons/io";
import { connect } from 'react-redux';
import { Withdrow, Deposit } from '../Redux/actions/userActions';


const HeaderComponent = ({ balance }) => {
    return (
        <header>
            {/* top section starts */}
            <div className="top-header-area">
                <ul>
                    <li>
                        <Link to="/hospital" >
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
                        <Link to="tel:101">
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
                        </Link>
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
                <Link to={'/'} >
                    <Logo
                        fill={'rgb(7, 41, 77)'}
                        className={'peer h-40 w-40 border-8 p-1 rounded-full scale-75 transition-all border-[#07294d] '}
                    />
                    <h1 className='text-[#07294d] peer-hover:text-[#07291d4a]'><code lang='js'>Hospitalo</code></h1>
                </Link>
            </div>
            <div className="links">
                <ul>
                    <li style={{ backgroundColor: '#979b16' }}><Link to="/user/register" >User Login</Link></li>
                    <li style={{ backgroundColor: '#4fc0e8' }}>
                        <Link to="user/login">Hospital Login</Link>
                    </li>
                </ul>
            </div>
        </section>
    );
};

const NavbarComponent = ({ balance }) => {
    const { logoutUser, token } = useContext(UserContext);
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
                    <Link to="/"><AiFillHome /></Link>
                </li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>

                <li className='before:!border-none absolute right-0'>
                    <button className='flex gap-2 items-center'>
                        <IoIosWallet size={25} />
                        <span>Amount{balance}</span>
                    </button>
                </li>
            </ul>

        </nav>
    );
};

const mapStateToProps = (state) => {
    return {
        balance: state.user.balance
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deposit: (amount) => dispatch(Deposit(amount)),
        withdrow: (amount) => dispatch(Withdrow(amount))
    }
}
const Header = connect(mapStateToProps)(HeaderComponent);
const LogoSection = connect(mapStateToProps)(LogoSectionComponent);
const Navbars = connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);


export { Header, LogoSection, Navbars };
