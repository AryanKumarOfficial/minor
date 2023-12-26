import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RiHome2Line, RiInformationLine, RiUserLine, RiLogoutBoxLine, RiMenuLine } from 'react-icons/ri';
import UserContext from '../../context/client/UserContext';
import { FcBriefcase } from "react-icons/fc";
import { FaBriefcaseMedical } from "react-icons/fa6";
const NavbarComponent = () => {
    const { logoutUser } = useContext(UserContext);

    return (
        <nav className='bg-gray-800 pb-4 md:p-6'>
            <div className='container mx-auto flex items-center justify-between'>
                <Link className='navbar-brand flex justify-center items-center text-white hover:text-gray-500 transition-colors duration-700' to='/'>
                    <RiHome2Line className='mr-1' size={20} /> <span>Home</span>
                </Link>
                <button
                    className='md:hidden text-gray-500 hover:text-white focus:outline-none'
                    type='button'
                >
                    <RiMenuLine className='text-2xl' />
                </button>
                <div className='hidden md:flex flex-grow justify-end w-full'>
                    <ul className='flex flex-grow justify-end items-center space-x-4'>
                        <NavLink to='/user/dashboard' icon={<FaBriefcaseMedical size={20} className='mr-1' />}>
                            Appointment
                        </NavLink>
                        <NavLink to='/user/dashboard' icon={<RiUserLine size={20} className='mr-1' />}>
                            Profile
                        </NavLink>
                        <li>

                        </li>
                    </ul>
                </div>
            </div>
            <button
                className='flex items-center float-right text-white hover:text-gray-500 transition-colors duration-700 focus:outline-none'
                onClick={logoutUser}
            >
                <RiLogoutBoxLine className='mr-1' size={20} /> Logout
            </button>
        </nav>
    );
};

const NavLink = ({ to, icon, children }) => (
    <li>
        <Link
            className='flex justify-center items-center text-white hover:text-gray-500 transition-colors duration-700 '
            to={to}
        >
            {icon}{children}
        </Link>
    </li>
);

export default NavbarComponent;
