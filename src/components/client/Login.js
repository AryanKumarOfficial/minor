import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { loginUser } from '../../Redux/slices/userSlice';
import Layout from './Layout';
import './Login.css';

const UserLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const { loginUser, user, showToast } = useContext(UserContext);
    // states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(true);
    // redux states
    const { isAuthenticated, loading } = useSelector(state => state.user);

    useEffect(() => {
        document.title = 'Hospitalo | User Login';

        if (
            email.length > 0 &&
            password.length >= 6 &&
            email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        ) {
            setDisabled(false);

        }
        else {
            setDisabled(true);
        }

        if (isAuthenticated) {
            navigate('/user/dashboard/profile');
        }

        // destroy toast after 2000
        const timer = setTimeout(() => {
            toast.remove();
        }
            , 2000);
        return () => clearTimeout(timer);

    }, [email, password, isAuthenticated, navigate]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            let credentials = { email, password };
            dispatch(loginUser(credentials)).then((result) => {
                if (result?.payload?.success) {
                    toast.success('Logged In successfully', {
                        duration: 2000,
                        position: 'top-center',
                        style: {
                            background: '#d2bfb2',
                            color: '#000',
                            border: '2px solid #000',
                            padding: '16px',
                            zIndex: 1,
                        },
                        iconTheme: {
                            primary: '#000',
                            secondary: '#FFFAEE',
                        },
                    });
                    setEmail('');
                    setPassword('');
                    setTimeout(() => {
                        redirect('/user/dashboard/profile');
                    }, 2000);
                }
                else {
                    toast.error('Invalid Credentials', {
                        duration: 2000,
                        position: 'top-center',
                        style: {
                            background: '#d2bfb2',
                            color: '#000',
                            border: '2px solid #000',
                            padding: '16px',
                            zIndex: 1,
                        },
                        iconTheme: {
                            primary: '#000',
                            secondary: '#FFFAEE',
                        },
                    });
                }
            });
        } catch (error) {

            toast.error('Invalid Credentials', {
                duration: 2000,
                position: 'top-center',
                style: {
                    background: '#d2bfb2',
                    color: '#000',
                    border: '2px solid #000',
                    padding: '16px',
                    zIndex: 1,
                },
                iconTheme: {
                    primary: '#000',
                    secondary: '#FFFAEE',
                },
            });

        }


    }

    return (
        <>
            <Layout>

                <form
                    className="login-form flex flex-col justify-center items-center  rounded p-4 "
                    onSubmit={handleSubmit}
                    autoComplete='off'
                >
                    <h1 className='text-maroon text-xl font-bold'>User Login</h1>
                    <div className="flex focus-within:text-maroon py-2 w-full">
                        <HiAtSymbol
                            className='icon-at mx-1 absolute'
                            style={{
                                padding: '1px',
                                marginTop: '4px',

                            }}
                            size={20}
                        />
                        <input
                            type="email"
                            name="email" placeholder="Email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email} autoComplete='off'
                            className='pl-7 pr-1 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-maroon focus-within:ring-opacity-50 w-full p-1'
                            style={{ color: '#000' }}
                        />
                    </div>
                    <div className="flex focus-within:text-maroon py-2 w-full">
                        <HiFingerPrint
                            className='icon-at mx-1 absolute'
                            style={{
                                padding: '1px',
                                marginTop: '4px',

                            }}
                            size={20}
                        />
                        <input
                            type="password"
                            name="password" placeholder="Password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            value={password} autoComplete='off'
                            className='pl-7 pr-1 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-maroon focus-within:ring-opacity-50 w-full p-1'
                            style={{ color: '#000' }}
                        />
                    </div>
                    {/* forgot password */}
                    <div className="flex justify-end items-start pb-1 w-full">
                        <Link to='/user/forgot-password' className='text-sm text-maroon hover:underline transition-all duration-500'>Forgot Password?</Link>
                    </div>
                    <button
                        type="submit"
                        className="rounded-lg w-full bg-maroon text-white font-bold  hover:bg-opacity-80 transition-all duration-300 ease-in-out disabled:!cursor-not-allowed disabled:!bg-[#d2bfb2] disabled:hover:!text-white disabled:hover:!shadow-none"
                        disabled={disabled}
                    >{loading ? 'Login...' : "login"}</button>
                    <div className="flex py-2 justify-center items-baseline h-full w-full cursor-pointer  text-lg">
                        <p className='group text-maroon'>New to plateform?
                            <Link className='group-hover:text-light transition-colors duration-500' to="/user/register">
                                Register
                            </Link>
                        </p>
                    </div>
                </form>
            </Layout>
        </>
    );
}

export default UserLogin;
