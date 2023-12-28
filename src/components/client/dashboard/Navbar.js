import React, { useContext, useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import { RiHome2Line, RiInformationLine, RiUserLine, RiLogoutBoxLine, RiMenuLine } from 'react-icons/ri';
import { FcBriefcase } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import { FaBriefcaseMedical } from 'react-icons/fa6';
import Logo from '../../Logo';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../Redux/slices/userSlice';
import toast from 'react-hot-toast';

const NavbarComponent = () => {
    const { token } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logoutUser(token)).then((res) => {
            if (res.payload.success) {
                toast.success(res.payload.msg);
                redirect('/user/login');
            }
            else {
                toast.error(res.payload.msg);
            }
        });
    };

    return (
        <nav className='bg-gray-800 p-4 md:p-6'>
            <div className='container mx-auto md:mx-4 flex flex-wrap items-center justify-between md:grid md:grid-cols-2 md:w-screen md:justify-between'>
                <Link className='navbar-brand flex justify-center items-center text-white hover:text-gray-500 transition-colors duration-700 md:flex md:justify-start md:w-full' to='/'>
                    <Logo
                        className={`w-14 h-14 mr-2 -ml-2 md:block hover:animate-bounce transition-all duration-700 ease-in-out`}
                        fill={'#fff'}
                    />
                    <span className='peer font-bold text-4xl'>Hospitalo</span>
                </Link>
                <button
                    className={`md:hidden text-white hover:text-gray-600 focus:outline-none transition-all duration-700 ease-in-out float-right`}
                    type='button'
                    onClick={toggleMenu}
                >
                    {!isMenuOpen ? <RiMenuLine size={35} className='text-2xl' /> : <MdClose size={35} className='text-2xl' />}
                </button>

                <div className={`md:flex flex-col md:flex-row flex-wrap flex-grow justify-end w-full ${isMenuOpen ? 'block' : 'hidden'} transition-all `}>
                    <ul className={`flex flex-col md:flex-row flex- justify-start items-center space-x-0 md:space-x-0 md:space-y-0 content-start ${isMenuOpen ? 'block' : 'hidden'} md:flex py-2 md:relative md:left-16`}>
                        <NavLink
                            isMenuOpen={isMenuOpen}
                            to='/user/dashboard/appointments'
                            icon={
                                <FaBriefcaseMedical
                                    size={20}
                                    className='mr-1'
                                />
                            }
                        >
                            Appointment
                        </NavLink>
                        <NavLink
                            isMenuOpen={isMenuOpen}
                            to='/user/dashboard/profile'
                            icon={
                                <RiUserLine
                                    size={20}
                                    className='mr-1'
                                />
                            }
                        >
                            Profile
                        </NavLink>
                    </ul>
                    <button
                        className='flex flex-wrap items-center float-left text-white hover:text-gray-500 transition-colors duration-700 focus:outline-none md:flex md:justify-center md:items-center md:py-2 md:px-4 md:absolute md:right-0 md:mr-4 md:mt-0'
                        onClick={handleLogout}
                    >
                        <RiLogoutBoxLine className='mr-1' size={20} /> Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ to, icon, children, isMenuOpen }) => (
    <li className='w-full flex py-2 md:flex md:p-0'>
        <Link
            className={`flex justify-center items-center text-white hover:text-gray-500 transition-colors duration-700 ${isMenuOpen ? 'block' : 'hidden'} md:flex md:justify-start md:items-center md:p-0 md:px-4`}
            to={to}
        >
            {icon}
            {children}
        </Link>
    </li>
);


export default NavbarComponent;
