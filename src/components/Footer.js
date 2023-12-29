import React from 'react';
import './Footer.css';
import { PiPhoneCallFill } from 'react-icons/pi';
import { IoIosMail } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="footer flex flex-col pt-6 justify-evenly md:grid md:grid-cols-3 md:pt-6 md:justify-evenly md:flex-wrap">
            <div className="flex flex-wrap justify-center items-center ">
                <Link
                    to="/"
                    className="flex flex-wrap text-wrap flex-col items-center justify-center transition-all cursor-default"
                >
                    <Logo
                        className=" w-24 md:w-40 h-24 md:h-40 border-2 border-white rounded-full shadow-md outline-double outline-green-700 outline-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:outline-0"
                        fill={'#fff'}
                    />
                    <p className="peer-hover:text-white text-sm md:text-base transition-colors pt-4 cursor-pointer hover:text-[#af5111] duration-300 text-center">
                        Connecting Patients to Care, Anytime, Anywhere.
                    </p>
                </Link>
            </div>
            <div className="flex flex-wrap flex-col justify-stretch px-10 md:px-0 items-start md:items-center w-full py-8 md:py-0">
                <h5 className='text-[#af5111] text-2xl font-bold'>Quick Links</h5>
                <ul className='my-4 flex  flex-col justify-center items-start flex-wrap gap-4'>
                    <li>
                        <Link className='transition-colors hover:text-[#af5111] duration-500' to="/">Home</Link>
                    </li>
                    <li>
                        <Link className='transition-colors hover:text-[#af5111] duration-500' to="/hospital">Find Hospital</Link>
                    </li>
                    <li>
                        <Link className='transition-colors hover:text-[#af5111] duration-500' to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link className='transition-colors hover:text-[#af5111] duration-500' to="/privacy">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link className='transition-colors hover:text-[#af5111] duration-500' to="/terms">Terms & Conditions</Link>
                    </li>
                </ul>
            </div>
            <div className="flex flex-wrap flex-col justify-stretch items-start px-10 md:px-0 pb-8 md:pb-0 md:items-center w-full">
                <h5 className='text-[#af5111] text-2xl font-bold'>Get in Touch</h5>
                <ul className='my-4 flex  flex-col justify-center items-start flex-wrap gap-4'>
                    <li>
                        <Link className='group' to="tel:+918235172505">
                            <div className="icon flex flex-wrap justify-start items-center">
                                <PiPhoneCallFill />
                                <span className='font-bold '>Phone:</span>
                            </div>
                            <span className='group-hover:text-[#af5111] transition-colors duration-500'>+918235172505</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='group' to="mailto:support@hospitalo.com">
                            <div className="icon flex flex-wrap  justify-start items-center">
                                <IoIosMail />
                                <span className='font-bold'>Mail:</span>
                            </div>
                            <span className='group-hover:text-[#af5111] transition-colors duration-500'>support@hospitalo.com</span>
                        </Link>
                    </li>

                    <li>
                        <Link className='group' to="http://bit.ly/hospitalo">
                            <div className="icon flex flex-wrap  justify-start items-center">
                                <FaLocationDot />
                                <span className='font-bold'>Address:</span>
                            </div>
                            <span className='group-hover:text-[#af5111] transition-colors duration-500'>Chankaya Boy's Hostel</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="copy bg-[#05224c] w-screen text-center py-2 m-auto">
                <p className="text-xs md:text-sm text-white">
                    &copy; {new Date().getFullYear()} All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
